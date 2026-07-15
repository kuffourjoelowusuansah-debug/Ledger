# The Growth Ledger
### A 30-Day Business & Revenue Mastery Course — full website, payment, and content system

A daily-unlocking online course for Ghanaian entrepreneurs, running **1–30 August 2026**.
One-time payment of **GHS 40** (via Paystack) unlocks all 30 days; each lesson opens on
its own calendar date. Every lesson includes interactive exercises, a downloadable PDF
workbook, and curated YouTube resources.

This is a real, working system — not a mockup. It needs about 20–30 minutes of setup
(mostly pasting your own Firebase and Paystack keys into two files) before it can accept
real payments.

---

## 1. What's in this folder

```
index.html            Landing page — course overview, sign up, pay GHS 40
dashboard.html         "Growth Ledger" — the 30-day grid, locked/unlocked/done
lesson.html            One reusable template for all 30 lessons (?day=1 ... ?day=30)
css/style.css          The full design system ("The Growth Ledger" — green/gold/cream)
js/lessons-data.js      ALL 30 days of content — edit this to change any lesson text
js/firebase-config.js   ⚠️ YOU MUST EDIT — your Firebase + Paystack keys go here
js/auth.js              Sign up / log in / session logic
js/payment.js           Triggers the Paystack popup + server-side verification
js/lesson-loader.js     Renders lesson.html dynamically based on the day in the URL
functions/index.js      Cloud Function that SECURELY verifies payments (see below)
functions/package.json  Dependencies for the Cloud Function
firestore.rules         Locks down the database so nobody can fake a payment
firebase.json           One-command deploy config for Firebase Hosting
generate_pdfs.py         Regenerates all 30 workbook PDFs from lessons-data.js
pdfs/                   The 30 generated workbook PDFs (already built — ready to use)
```

## 2. How the payment + unlock system actually works (read this first)

This matters because it's the part that involves real money:

1. A visitor creates an account (email + password, via Firebase Auth) on `index.html`.
2. They click **Pay GHS 40**, which opens Paystack's secure popup.
3. When Paystack reports success, the browser does **not** just trust that and unlock
   the course. Instead it calls your `verifyPaystackPayment` Cloud Function, sending
   the transaction reference.
4. That Cloud Function — running on your server, not in the visitor's browser — asks
   Paystack directly "did this transaction really succeed, and for the right amount?"
   using your **secret key**, which is never exposed to the browser.
5. Only if Paystack itself confirms success does the function mark `paid: true` on
   that user's record in Firestore. Nothing in the browser is ever allowed to set
   that flag directly — `firestore.rules` enforces this at the database level too.
6. `dashboard.html` and `lesson.html` both check `paid` and the calendar date before
   showing any lesson content.

**Why this matters:** a simpler version of this course could just check `paid` from
client-side JavaScript alone — but that can be faked by anyone who opens their browser's
developer console. This setup can't be faked that way, because the only thing that can
ever set `paid: true` is your own server-side Cloud Function talking directly to Paystack.

**Honest limitation to know about:** the calendar-based day-locking (Day 8 not showing
until 8 August) is currently checked client-side against the device's clock. This is
appropriate for a GHS 40 educational product — someone determined enough could change
their device clock to peek at tomorrow's lesson a few hours early. If you ever want that
airtight too, the same Cloud Function pattern used for payments could be extended to also
serve lesson content only after checking the *server's* clock — say if this grows into a
larger product.

## 3. Setup — step by step

### A. Create your Firebase project
1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project**.
2. Once created, go to **Build → Authentication → Get started** → enable the
   **Email/Password** sign-in method.
3. Go to **Build → Firestore Database → Create database** → start in production mode.
4. Go to **Project settings → General → Your apps → Add app → Web (</>)** — register
   an app, and copy the `firebaseConfig` object it gives you.

### B. Create your Paystack account
1. Sign up at [paystack.com](https://paystack.com) (supports Ghana — MTN MoMo, Telecel
   Cash, AirtelTigo Money, and cards).
2. Go to **Settings → API Keys & Webhooks** — copy your **Test Public Key** (`pk_test_...`)
   and **Test Secret Key** (`sk_test_...`) to start. Switch to live keys only once you're
   ready to accept real payments.

### C. Fill in your keys
Open `js/firebase-config.js` and replace the placeholder values with what you copied
from Firebase and your Paystack **public** key.

### D. Install the Firebase CLI and deploy
```bash
npm install -g firebase-tools
firebase login
cd growth-ledger              # this folder
firebase use --add            # select your Firebase project

# Set your Paystack SECRET key as a server-side config value —
# never paste the secret key into any file that gets deployed to the browser.
firebase functions:config:set paystack.secret="sk_test_your_secret_key_here"

firebase deploy --only firestore:rules
firebase deploy --only functions
```
After the functions deploy finishes, copy the printed URL for `verifyPaystackPayment`
into `VERIFY_FUNCTION_URL` in `js/firebase-config.js`.

Finally, deploy the website itself:
```bash
firebase deploy --only hosting
```
Your course is now live at the URL Firebase gives you (you can later connect a custom
domain for free in Firebase Hosting settings).

### E. Test before going live
- Use Paystack's [test card numbers](https://paystack.com/docs/payments/test-payments/)
  and test MoMo numbers to run through the full sign-up → pay → dashboard → lesson flow.
- Confirm a user who hasn't paid is correctly blocked from `dashboard.html` and `lesson.html`.
- Confirm Day 2+ lessons correctly show as locked until their date (you can temporarily
  edit `COURSE_START` in `js/lessons-data.js` to an earlier date to test unlocking without
  waiting for real calendar days).
- Only once everything works in test mode, switch to your **live** Paystack keys
  (both the public key in `firebase-config.js` and the secret key via
  `firebase functions:config:set`) and redeploy.

## 4. Editing lesson content

Everything — every lesson's title, text, quiz questions, checklist items, action steps,
video links, and PDF filenames — lives in **`js/lessons-data.js`**. Edit any lesson there,
then regenerate the matching PDF:

```bash
node -e "const {LESSONS} = require('./js/lessons-data.js'); require('fs').writeFileSync('lessons-export.json', JSON.stringify(LESSONS));"
python3 generate_pdfs.py
```
This keeps the website and the downloadable PDFs perfectly in sync — both are generated
from the same source of truth.

## 5. A note on the curated videos

Every video linked in this course was checked and confirmed to exist at the time this
was built. YouTube links occasionally go private, get taken down, or get replaced by
newer versions over time — it's worth a periodic check every few months (there are 60+
links across `js/lessons-data.js`, all in the `videos` array of each lesson) and swapping
in fresh ones if any go stale.

## 6. Pricing & currency

The course price (`COURSE_PRICE_GHS = 40`) is set in `js/lessons-data.js` and referenced
by `js/payment.js`. If you ever change the price, update it there — the Cloud Function
in `functions/index.js` also checks the amount paid matches (as pesewas: GHS × 100) to
prevent anyone replaying an unrelated smaller transaction, so update
`EXPECTED_AMOUNT_PESEWAS` there too if the price changes.

---

Built for Joel — August 2026 cohort. Good luck with the launch.

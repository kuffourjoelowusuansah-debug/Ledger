/* ============================================================
   FIREBASE CONFIG — fill in with your own Firebase project values.
   Get these from: Firebase Console → Project Settings → General
   → "Your apps" → Web app → SDK setup and configuration.
   These values are safe to expose publicly (they identify your
   project, not authenticate anything by themselves) — real security
   comes from your Firestore Rules and Cloud Functions, not from
   hiding this file.
   ============================================================ */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ---- Paystack public key (safe to expose client-side) ----
// Get this from: Paystack Dashboard → Settings → API Keys & Webhooks
// Use the TEST key (pk_test_...) while developing, and the LIVE key
// (pk_live_...) only once you're ready to accept real payments.
const PAYSTACK_PUBLIC_KEY = "pk_test_YOUR_PUBLIC_KEY_HERE";

// ---- Cloud Function endpoint (filled in automatically after deploy) ----
// After running `firebase deploy --only functions`, the Firebase CLI
// prints a URL for verifyPaystackPayment — paste it here.
const VERIFY_FUNCTION_URL = "https://YOUR-REGION-YOUR-PROJECT.cloudfunctions.net/verifyPaystackPayment";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

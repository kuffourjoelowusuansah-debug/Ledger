/* ============================================================
   PAYMENT — Paystack Inline popup + server-side verification.

   IMPORTANT SECURITY NOTE:
   The Paystack popup below only *initiates* a charge. A successful
   popup callback on its own is NOT proof of payment — it can be
   spoofed in the browser. Real confirmation must happen server-side,
   which is why every successful callback here calls our Cloud
   Function (verifyPaystackPayment), which re-checks the transaction
   directly with Paystack's API using your SECRET key (never exposed
   to the browser) before marking anyone as paid in Firestore.
   Never mark a user as paid directly from client-side JS.
   ============================================================ */

function startCoursePayment(email){
  return new Promise((resolve, reject) => {
    if (typeof PaystackPop === "undefined") {
      reject(new Error("Paystack script not loaded. Check your internet connection and try again."));
      return;
    }

    const handler = PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: COURSE_PRICE_GHS * 100, // Paystack expects the amount in the lowest currency subunit (pesewas)
      currency: "GHS",
      metadata: {
        custom_fields: [
          { display_name: "Course", variable_name: "course", value: "The Growth Ledger — 30-Day Business & Revenue Mastery" }
        ]
      },
      callback: function(response){
        // response.reference is the Paystack transaction reference.
        // We now verify it server-side before trusting it.
        verifyPaymentServerSide(response.reference)
          .then(resolve)
          .catch(reject);
      },
      onClose: function(){
        reject(new Error("Payment window closed before completing payment."));
      }
    });

    handler.openIframe();
  });
}

function verifyPaymentServerSide(reference){
  const user = auth.currentUser;
  if (!user) return Promise.reject(new Error("You must be signed in before paying."));

  return user.getIdToken().then(idToken => {
    return fetch(VERIFY_FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + idToken
      },
      body: JSON.stringify({ reference: reference })
    })
    .then(res => res.json())
    .then(data => {
      if (!data.success) throw new Error(data.message || "Payment verification failed.");
      return data;
    });
  });
}

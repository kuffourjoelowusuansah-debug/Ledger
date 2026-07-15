/* ============================================================
   AUTH — email/password sign-up & login via Firebase Auth.
   Creates a Firestore user doc on first sign-up: { email, paid:false,
   purchaseDate:null, createdAt, completedDays:[] }
   ============================================================ */

function signUp(email, password){
  return auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      return db.collection("users").doc(cred.user.uid).set({
        email: email,
        paid: false,
        purchaseDate: null,
        transactionRef: null,
        completedDays: [],
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    });
}

function logIn(email, password){
  return auth.signInWithEmailAndPassword(email, password);
}

function logOut(){
  return auth.signOut();
}

function resetPassword(email){
  return auth.sendPasswordResetEmail(email);
}

// Returns the current user's Firestore doc (users/{uid}), or null if signed out.
function getCurrentUserDoc(){
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (!user) { resolve(null); return; }
      db.collection("users").doc(user.uid).get()
        .then(doc => resolve(doc.exists ? { uid:user.uid, ...doc.data() } : null))
        .catch(reject);
    });
  });
}

// Marks a day as completed for the current user (updates Firestore).
function markDayComplete(day){
  const user = auth.currentUser;
  if (!user) return Promise.reject("Not signed in");
  return db.collection("users").doc(user.uid).update({
    completedDays: firebase.firestore.FieldValue.arrayUnion(Number(day))
  });
}

// Redirects to index.html if not signed in. Call at the top of protected pages.
function requireAuth(){
  return new Promise((resolve) => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        window.location.href = "index.html?next=" + encodeURIComponent(window.location.pathname + window.location.search);
      } else {
        resolve(user);
      }
    });
  });
}

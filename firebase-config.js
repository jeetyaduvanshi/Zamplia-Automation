// =============================================================================
// FIREBASE CLOUD REAL-TIME CONFIGURATION
// =============================================================================
// This file connects your website to Google Cloud Firestore so that every survey
// pushed from the admin panel appears instantly on all devices & browsers worldwide!
//
// 1. Go to https://console.firebase.google.com/
// 2. Click "Add project" (Free Spark Plan).
// 3. Click the Web icon (</>) to create a Web App and copy your config object below.
// 4. In Firebase Console, go to Build -> Firestore Database -> Create Database (Test Mode).
// =============================================================================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Check if real credentials have been provided
const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== "YOUR_API_KEY" &&
  firebaseConfig.projectId &&
  firebaseConfig.projectId !== "YOUR_PROJECT_ID"
);

let db = null;

if (isFirebaseConfigured && typeof firebase !== 'undefined') {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    console.log('[FIREBASE] Cloud Firestore connected successfully.');
  } catch (err) {
    console.error('[FIREBASE] Initialization error:', err);
  }
}

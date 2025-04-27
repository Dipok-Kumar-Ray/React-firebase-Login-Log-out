// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwQMMuN7gNjHRMPgxFYpLaYrMVa3JT98o",
  authDomain: "simple-firebase-auth2-6cb9c.firebaseapp.com",
  projectId: "simple-firebase-auth2-6cb9c",
  storageBucket: "simple-firebase-auth2-6cb9c.firebasestorage.app",
  messagingSenderId: "795649368934",
  appId: "1:795649368934:web:9cfe5093a02c782361dea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);





// import { initializeApp, getApps } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDwQMMuN7gNjHRMPgxFYpLaYrMVa3JT98o",
//   authDomain: "simple-firebase-auth2-6cb9c.firebaseapp.com",
//   projectId: "simple-firebase-auth2-6cb9c",
//   storageBucket: "simple-firebase-auth2-6cb9c.appspot.com",
//   messagingSenderId: "795649368934",
//   appId: "1:795649368934:web:9cfe5093a02c782361dea7"
// };

// // Check if any apps have already been initialized
// const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// export const auth = getAuth(app);

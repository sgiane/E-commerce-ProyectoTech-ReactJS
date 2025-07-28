// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeVI6-qSm-YMqQT9Z459jqWR1-zMtjUxU",
  authDomain: "prueba-auth-86592.firebaseapp.com",
  projectId: "prueba-auth-86592",
  storageBucket: "prueba-auth-86592.firebasestorage.app",
  messagingSenderId: "934142709017",
  appId: "1:934142709017:web:9cc5565dbb7a72fb438988",
  measurementId: "G-Q60K13XRGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export function crearUsuario(email, password) {
  return new Promise((res, rej) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log("Credendiales", userCredential);
        const user = userCredential.user;
        console.log(user);
        res(user)
      })
      .catch((error) => {
        console.log(error.code, error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        rej(error)
      });
  });
}

auth.useDeviceLanguage()
export function logearG() {

  return (
    new Promise((res, rej) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("test", result)
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          res(user)
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          console.log("test error", error)
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          rej()
          // ...
        });
    })
  )

}


export function loginEmailPass(email, password) {
  return new Promise((res, rej) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        console.log("Credendiales", userCredential);
        const user = userCredential.user;
        console.log(user);
        res(user)
      })
      .catch((error) => {
        console.log(error.code, error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        rej(error)
      });
  });
}

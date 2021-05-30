import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBPV8bRy09zTC71AZPNQQosQ_HLNlD8ypU",
    authDomain: "fir-auth-development-847c3.firebaseapp.com",
    projectId: "fir-auth-development-847c3",
    storageBucket: "fir-auth-development-847c3.appspot.com",
    messagingSenderId: "33848548806",
    appId: "1:33848548806:web:28c4256a801c7c534be6c7"
});

const auth = app.auth();
export { auth };
export default app;
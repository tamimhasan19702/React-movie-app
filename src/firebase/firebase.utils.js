import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyD6Uj-uO11mw2zgj0FV0O_GdvZIg7UHsFg",
    authDomain: "tmmovie-website.firebaseapp.com",
    projectId: "tmmovie-website",
    storageBucket: "tmmovie-website.appspot.com",
    messagingSenderId: "397072549205",
    appId: "1:397072549205:web:2d24d58fd00df2d45b1bdc",
    measurementId: "G-371PWHD4JP"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
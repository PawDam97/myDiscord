import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSxGPbHV-vJoh0lA3osCrWp8Q0fNz0gQI",
    authDomain: "my-discord-297d1.firebaseapp.com",
    projectId: "my-discord-297d1",
    storageBucket: "my-discord-297d1.appspot.com",
    messagingSenderId: "234484118725",
    appId: "1:234484118725:web:06087b0328d8c4569becac",
    measurementId: "G-0GK57D5BVL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
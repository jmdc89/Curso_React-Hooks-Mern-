import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWyp5NjDVnToGIP-taM7-lDmWKDZ5gxeA",
    authDomain: "react-app-cursos-7fc8e.firebaseapp.com",
    projectId: "react-app-cursos-7fc8e",
    storageBucket: "react-app-cursos-7fc8e.appspot.com",
    messagingSenderId: "629802188575",
    appId: "1:629802188575:web:5ed614c2a7b7d5ab1eba2a"
    };

    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    
    
    export {
        db,
        googleAuthProvider,
        firebase
    };
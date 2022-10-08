import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDScHgCPgki_VIiPtoo5EgiuXGmzNWz6dE",
	authDomain: "clone-1ee82.firebaseapp.com",
	projectId: "clone-1ee82",
	storageBucket: "clone-1ee82.appspot.com",
	messagingSenderId: "785673012338",
	appId: "1:785673012338:web:c8898729ce9030a9cc6eeb",
	measurementId: "G-NJW5KRSFTR",
});

const auth = firebaseApp.auth();

export { auth };

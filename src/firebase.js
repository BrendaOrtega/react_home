
import * as firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyBXmpV97omiUnbl10UyX6w4-fAjmZuNHBw",
    authDomain: "camp-92fe8.firebaseapp.com",
    databaseURL: "https://camp-92fe8.firebaseio.com",
    projectId: "camp-92fe8",
    storageBucket: "camp-92fe8.appspot.com",
    messagingSenderId: "994523869842"
};
firebase.initializeApp(config);

export default firebase;
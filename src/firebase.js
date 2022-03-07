import firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyCgWcmLh8Dugv1vk27cgGdf2c8f0k4zphc',
  authDomain: 'slack-clone-a81dc.firebaseapp.com',
  projectId: 'slack-clone-a81dc',
  storageBucket: 'slack-clone-a81dc.appspot.com',
  messagingSenderId: '438583338981',
  appId: '1:438583338981:web:d3c459bee673755045710c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

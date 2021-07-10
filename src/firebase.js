import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBxSRDRKKvO-Gia07KwxIIWIIjSLYot3HE',
  authDomain: 'study-3b112.firebaseapp.com',
  databaseURL: 'https://study-3b112-default-rtdb.firebaseio.com',
  projectId: 'study-3b112',
  storageBucket: 'study-3b112.appspot.com',
  messagingSenderId: '544915548475',
  appId: '1:544915548475:web:549800907d5405e8ecef1e',
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyC8iJGsLAOorBJEjWDSNzDSDT-Adhb_Du8',
  authDomain: 'netflix-clone-c6f2e.firebaseapp.com',
  projectId: 'netflix-clone-c6f2e',
  storageBucket: 'netflix-clone-c6f2e.appspot.com',
  messagingSenderId: '935345419138',
  appId: '1:935345419138:web:cad63282d9172f565b559b',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;

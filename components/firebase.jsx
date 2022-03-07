import firebase from "firebase";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4_JJDP9xIBb-RNEY5KXMyK-sHFJXnMRE",
  authDomain: "elizabeth-b75c9.firebaseapp.com",
  projectId: "elizabeth-b75c9",
  storageBucket: "elizabeth-b75c9.appspot.com",
  messagingSenderId: "946118043518",
  appId: "1:946118043518:web:644e0f553e468cf2fd352f"
};

let app;
if(!firebase.apps.length){
     app = firebase.initializeApp(firebaseConfig);
}else{
    firebase.app;
}
const auth=firebase.auth();

const Firebase = {
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signOut: () => {
    return firebase.auth().signOut()
  },
  checkUserAuth: user => {
    return firebase.auth().onAuthStateChanged(user)
  },
  passwordReset: email => {
    return firebase.auth().sendPasswordResetEmail(email)
  },
  // firestore
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
  }
}
// const database=app.database();


export {auth};
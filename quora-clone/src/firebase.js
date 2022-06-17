import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKdgDqe49USMqQurY2Z9MWWXH8knXzO-E",
    authDomain: "quora-clone-f48e6.firebaseapp.com",
    projectId: "quora-clone-f48e6",
    storageBucket: "quora-clone-f48e6.appspot.com",
    messagingSenderId: "130216740558",
    appId: "1:130216740558:web:9b4e2a980bab9dbff7b29f",
    measurementId: "G-C2WKSXBT0L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}

  export default db
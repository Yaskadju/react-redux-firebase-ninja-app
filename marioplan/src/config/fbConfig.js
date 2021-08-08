import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyDpazZwurFP6nHQoh5UlT_a8nhjGm3nRKg",
  authDomain: "tyumi-marioplan.firebaseapp.com",
  projectId: "tyumi-marioplan",
  storageBucket: "tyumi-marioplan.appspot.com",
  messagingSenderId: "838604184872",
  appId: "1:838604184872:web:a94e53d79b5495cb4e441d",
  measurementId: "G-B1FEWZJMSL"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase

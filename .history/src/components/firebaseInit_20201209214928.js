import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from "./firebaseConfig"

const firebaseApp=firebase.inizializeApp
(firebaseConfig)
export default firebase.firestore()
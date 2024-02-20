import {initializeApp} from "firebase/app";
import {addDoc, collection, getFirestore, onSnapshot, orderBy, query, serverTimestamp} from 'firebase/firestore'


const firebaseConfig = {
    apiKey:
    authDomain
:
projectId:
    storageBucket:
        messagingSenderId:
            appId:
                }

initializeApp(firebaseConfig)

const firestore = getFirestore()

const MESSAGES = 'messages'

export {
    firestore,
    collection,
    addDoc,
    query,
    onSnapshot,
    serverTimestamp,
    orderBy,
    MESSAGES
}

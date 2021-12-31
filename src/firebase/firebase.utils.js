import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA_bqe1meTD0-63i9OU_oOromW58lvjdUk",
    authDomain: "crwn-clothing-db-c241c.firebaseapp.com",
    projectId: "crwn-clothing-db-c241c",
    storageBucket: "crwn-clothing-db-c241c.appspot.com",
    messagingSenderId: "577033732553",
    appId: "1:577033732553:web:eb2d84c8be98bdef95a818",
    measurementId: "G-0SGNXRV7R1"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    } 
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
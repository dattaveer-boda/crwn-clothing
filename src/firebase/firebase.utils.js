import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAFqxIm0Z_B-sXlaAqxnVIEVYPsfu4f2kU",
  authDomain: "crwn-db-74906.firebaseapp.com",
  projectId: "crwn-db-74906",
  storageBucket: "crwn-db-74906.appspot.com",
  messagingSenderId: "188404320181",
  appId: "1:188404320181:web:c77129f066d4f7ff527bfc",
  measurementId: "G-7JE16KZGBZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return false;

  // const userRef = firestore.collection('user').doc(userAuth.uid) // (or)
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  const collectionRef = firestore.collection("users");
  const collectionSnapshot = await collectionRef.get();
  console.log(collectionSnapshot.docs); // gets all documents in users collection
  console.log(collectionSnapshot.docs.map((doc) => doc.data())); // gets the data of 1st row

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.default.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); // new document with unique id
    batch.set(newDocRef, obj); // batch is like transaction, to ensure all are either succeded or all are failed
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      title,
      routeName: encodeURI(title.toLowerCase()),
      items,
    };
  });
  // transformedCollection is an array of objects
  // now change that to object of objects
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

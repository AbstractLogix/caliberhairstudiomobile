import { initializeApp } from "firebase/app";
import {
  getDoc,
  getDocs, 
  Firestore,
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  where,
  serverTimestamp,} from 'firebase/firestore';
// firebase config import
import { firebaseConfig } from "./firebase_secrets";

// initalize firebase
const Firebase = initializeApp(firebaseConfig);

const db = getFirestore(Firebase);

// function to add artists to the collection of artists
export async function addArtist(artistName: string, artistBio: string) {
    // Add a new message entry to the Firebase database.
    try {
      await addDoc(collection(getFirestore(), 'artists'), {
        name: artistName,
        bio: artistBio,
      });
    }
    catch(error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

// Get a list of artists from firestore
export async function getAllArtists(db: Firestore) {

  const q = query(collection(db, "artists"), );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  return querySnapshot; 
}

// Get a single artist from firestore
export async function getArtist(db: Firestore, artistID: string) {

    const docRef = doc(db, "artists", artistID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
} 




    

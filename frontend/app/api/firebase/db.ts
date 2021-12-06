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
  runTransaction,
  doc,
  where,
  serverTimestamp,} from 'firebase/firestore';
import artists from "../../assets/data/artistData";
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
export async function getAllArtists() {

  const q = query(collection(db, "artists"), );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  return querySnapshot; 
}

// Get a single artist from firestore
export async function getArtist(artistID: string) {

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

export async function addArtistReview(artistID: string, customerName: string, rating: number, content: string) {

  // Add a new review entry to the Firebase database.
  try {
    await addDoc(collection(db, 'artists/' + artistID +'/reviews'), {
      customer: customerName,
      rating: rating,
      content: content,
    });
  }
  catch(error) {
    console.error('Error writing new review to Firebase Database', error);
  }
}

export async function addCustomer(customerID: string, name: string, phoneNumber: string) {

  // Add a new customer entry to the Firebase database.
  try {
    await addDoc(collection(db, 'customers'), {
      name: name,
      phoneNumber: phoneNumber,
    });
  }
  catch(error) {
    console.error('Error writing new customer to Firebase Database', error);
  }
}

// this function returns a querysnapshot of all apointments that can be iterated through.
export async function getAllappointments(){
  const q = query(collection(db, "appointments"), );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
  return querySnapshot;
}

export async function addNewProduct(productID: string, name: string, cost: number, stock: number) {
  // Add a new item entry to the Firebase database.
  try {
    await setDoc(doc(db, 'products', productID), {
      name: name,
      cost: cost,
      stock: stock
    });
  }
  catch(error) {
    console.error('Error writing new product to Firebase Database', error);
  }
}


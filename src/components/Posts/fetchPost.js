import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "firebaseApp/config";

export async function fetchPosts() {
  try {
    const postsSnapshot = await getDocs(collection(db, "posts"));
    const postsData = postsSnapshot.docs.map(doc => doc.data());
    return postsData;
  } catch (error) {
    console.error("Error fetching meetups: ", error);
  }
}

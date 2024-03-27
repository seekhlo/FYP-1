import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebaseConfig";

export async function fetchAllUsers() {
  try {
    const usersCollection = collection(FIREBASE_DB, "users"); // Replace 'users' with your collection name
    const querySnapshot = await getDocs(usersCollection);
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return empty array in case of error
  }
}

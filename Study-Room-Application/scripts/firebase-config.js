// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCyoyw60KfnefTRkz-82dW4wh_lY_3D1-I",
authDomain: "fir-bootcamp-ad71b.firebaseapp.com",
projectId: "fir-bootcamp-ad71b",
storageBucket: "fir-bootcamp-ad71b.firebasestorage.app",
messagingSenderId: "400595886747",
appId: "1:400595886747:web:675535c44d47b5550e1c3e",
databaseURL: "https://fir-bootcamp-ad71b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA8-9PjFJbx392x90x_CLKJfE8KKbpNGvY",
    authDomain: "proyectoreact333.firebaseapp.com",
    projectId: "proyectoreact333",
    storageBucket: "proyectoreact333.appspot.com",
    messagingSenderId: "1080951667486",
    appId: "1:1080951667486:web:0c975564d9b0ae6437e70f",
    measurementId: "G-BNC2Q15PDH"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export default db;
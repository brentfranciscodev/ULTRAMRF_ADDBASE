import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWZsKvQyPhae_X3DJxwwqtZcmvKwQys_U",
  authDomain: "ultramrfdatabase2024.firebaseapp.com",
  projectId: "ultramrfdatabase2024",
  storageBucket: "ultramrfdatabase2024.appspot.com",
  messagingSenderId: "176584988594",
  appId: "1:176584988594:web:68ceb4db9026c9c2c5f6ab",
  measurementId: "G-W50RSDJ3Q2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchData() {
  const productResults = document.getElementById("productResults");
  productResults.innerHTML = "";

  try {
    const querySnapshot = await getDocs(collection(db, "your_collection_name")); // Replace with your actual collection name
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const productDiv = document.createElement("div");
      productDiv.style.border = "1px solid #ccc"; // Add border for clarity
      productDiv.style.padding = "10px"; // Add padding
      productDiv.style.margin = "5px"; // Add margin
      productDiv.style.borderRadius = "5px"; // Add border radius

      productDiv.innerHTML = `
                <strong>Product ID:</strong> ${data.product_ID}<br>
                <strong>Product Name:</strong> ${data.product_name}<br>
                <strong>Category:</strong> ${data.category}<br>
                <strong>Price:</strong> ₱${data.price}<br>
                <strong>Branch:</strong> ${data.branch}<br>
                <hr>
            `; // Add a line break for separation

      // Append the product div to the main display area
      productResults.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
    productResults.innerText =
      "Error fetching data. Check the console for more details.";
  }
}

// Call the fetchData function to load the data on page load
fetchData();

document.addEventListener("DOMContentLoaded", function () {
  // Signup Form Submission
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const firstName = document.getElementById("firstName").value;
          const lastName = document.getElementById("lastName").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Save user data in localStorage
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userPassword", password);

          // Redirect to login page
          window.location.href = "home.html";
      });
  }

  // Login Form Submission
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Get stored user data from localStorage
          const storedEmail = localStorage.getItem("userEmail");
          const storedPassword = localStorage.getItem("userPassword");

          // Check if email and password match the stored data
          if (email === storedEmail && password === storedPassword) {
              // Redirect to dashboard page
              window.location.href = "dashboard.html";
          } else {
              alert("Invalid email or password. Please try again.");
          }
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
  // Signup Form Submission
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const firstName = document.getElementById("firstName").value;
          const lastName = document.getElementById("lastName").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Save user data in localStorage
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userPassword", password);

          // Redirect to login page
          window.location.href = "home.html";
      });
  }

  // Login Form Submission
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Get stored user data from localStorage
          const storedEmail = localStorage.getItem("userEmail");
          const storedPassword = localStorage.getItem("userPassword");

          // Check if email and password match the stored data
          if (email === storedEmail && password === storedPassword) {
              // Redirect to dashboard page
              window.location.href = "dashboard.html";
          } else {
              alert("Invalid email or password. Please try again.");
          }
      });
  }
});

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Sign Up
const signup = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User signed up:', userCredential.user);
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
};

// Sign In
const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User logged in:', userCredential.user);
    })
    .catch((error) => {
      console.error('Error logging in:', error);
    });
};

import { collection, addDoc, getDocs } from 'firebase/firestore';

// Add data
const addData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'your-collection'), data);
    console.log('Document written with ID:', docRef.id);
  } catch (e) {
    console.error('Error adding document:', e);
  }
};

// Get data
const getData = async () => {
  const querySnapshot = await getDocs(collection(db, 'your-collection'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
};
});

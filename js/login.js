import { auth } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Email & Password Login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful!");

    window.location.href = "dashboard.html";

  } catch (error) {
    alert(error.message);
  }
});

// Google Login
const googleBtn = document.getElementById("googleLogin");

if (googleBtn) {
  googleBtn.addEventListener("click", async () => {

    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);

      alert("Google Login Successful!");

      window.location.href = "dashboard.html";

    } catch (error) {
      alert(error.message);
    }

  });
}

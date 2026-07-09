import { auth } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Check if user is logged in
onAuthStateChanged(auth, (user) => {

    if (user) {

        document.getElementById("userEmail").innerHTML =
        "Logged in as: <b>" + user.email + "</b>";

    } else {

        window.location.href = "login.html";

    }

});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {

    signOut(auth)
    .then(() => {

        alert("Logged out successfully");

        window.location.href = "login.html";

    })
    .catch((error) => {

        alert(error.message);

    });

});

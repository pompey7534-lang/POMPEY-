import { auth } from "./firebase-config.js";

import {
sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const resetForm=document.getElementById("resetForm");

resetForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

try{

await sendPasswordResetEmail(auth,email);

alert("Password reset email sent successfully.");

window.location.href="login.html";

}catch(error){

alert(error.message);

}

});

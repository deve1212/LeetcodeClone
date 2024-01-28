import React, { useState } from 'react'
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:5173',
    // This must be true.
    handleCodeInApp: true,
  };
export default function SignIn() {
    const [email, setEmail] = useState();
    const auth = getAuth();
    async function sendEmail(auth, email, actionCodeSettings) {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        alert("email sent")
        window.localStorage.setItem('emailForSignIn', email);
        // ...
    })
    .catch((error) => {
        alert("email not sent")
        
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    }); 
}
  return (
    <div>
        <input type="text" onChange={(e)=>{
                setEmail(e.target.value)
        }}></input>
        <button onClick={()=>{
            sendEmail(auth,email,actionCodeSettings)
        }}>send email</button>

    </div>
  )
}

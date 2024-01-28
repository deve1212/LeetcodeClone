import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLpKcT0euQERurGRSJ_4PgDSELjNUJwZ0",
  authDomain: "leetcode-clone-ec800.firebaseapp.com",
  projectId: "leetcode-clone-ec800",
  storageBucket: "leetcode-clone-ec800.appspot.com",
  messagingSenderId: "598961262250",
  appId: "1:598961262250:web:55ef04b6b4c05f39e04ad3",
  measurementId: "G-5QXTMYXTW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     {<SignIn/>}
    </>
  )
}

export default App

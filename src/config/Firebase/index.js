import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBPBnnPwa4ir3kIcHCzlyDTy7A6mTFY2IA",
    authDomain: "kuispintar-512e6.firebaseapp.com",
    projectId: "kuispintar-512e6",
    storageBucket: "kuispintar-512e6.appspot.com",
    messagingSenderId: "146944026522",
    appId: "1:146944026522:web:ddad0174cd9ffd5d523c23"
  };

  const Fire = initializeApp(firebaseConfig);

  export default Fire;
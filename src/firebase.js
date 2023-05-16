import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAS1dvQWihqu9uUkmXux86dFbsiXStOXS0",
  authDomain: "auth-3ea66.firebaseapp.com",
  databaseURL: "https://auth-3ea66-default-rtdb.firebaseio.com",
  projectId: "auth-3ea66",
  storageBucket: "auth-3ea66.appspot.com",
  messagingSenderId: "91236596551",
  appId: "1:91236596551:web:55ecee423c16c0b8722a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

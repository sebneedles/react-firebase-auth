// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAe-UIxsuVVCtHKmSij2HQiOeakDRzDzAU',
  authDomain: 'react-auth-app-e9b69.firebaseapp.com',
  projectId: 'react-auth-app-e9b69',
  storageBucket: 'react-auth-app-e9b69.appspot.com',
  messagingSenderId: '394567056605',
  appId: '1:394567056605:web:a04151fb4a045e314daf34',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

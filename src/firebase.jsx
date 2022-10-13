// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARwUD1sztId-g9YEZfUaZMRKuyUgaTTx4',
  authDomain: 'haii-96a9d.firebaseapp.com',
  projectId: 'haii-96a9d',
  storageBucket: 'haii-96a9d.appspot.com',
  messagingSenderId: '1036866974658',
  appId: '1:1036866974658:web:c1ed9f703fb0d9253d1c5b',
  measurementId: 'G-1G7MN7TN2N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

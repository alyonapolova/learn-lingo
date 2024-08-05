import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBqTKdMBLD7xUckUU_9g0COOLkUzSoui78',
  authDomain: 'learn-lingo-9f562.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-9f562-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-9f562',
  storageBucket: 'learn-lingo-9f562.appspot.com',
  messagingSenderId: '20358801583',
  appId: '1:20358801583:web:592042e6bfd39c9c814c5a',
  measurementId: 'G-KQLV39RSL1',
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

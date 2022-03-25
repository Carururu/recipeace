import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBFF6lTm9sYtX_B1VaFpW2XTC2MwsnbN78',
  authDomain: 'recipeace-41b0d.firebaseapp.com',
  projectId: 'recipeace-41b0d',
  storageBucket: 'recipeace-41b0d.appspot.com',
  messagingSenderId: '290803208639',
  appId: '1:290803208639:web:a7c56cb075cb5cd319110a',
  measurementId: 'G-Y3B560ZX3E',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export { auth }

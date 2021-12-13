importScripts('https://www.gstatic.com/firebasejs/[7.24.0]/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/[7.24.0]/firebase-messaging.js');

firebase.initializeApp (
  {
    apiKey: "AIzaSyD-IogCorg36UIW8SXIfjqA3iAElBj11ww",
    authDomain: "funckycode-27197.firebaseapp.com",
    projectId: "funckycode-27197",
    storageBucket: "funckycode-27197.appspot.com",
    messagingSenderId: "307789649334",
    appId: "1:307789649334:web:d5be5f24ce6a1404291d17"
  }
)

const messaging = firebase.messaging()

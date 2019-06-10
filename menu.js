firebase.initializeApp({
  apiKey: "AIzaSyCuYNgi246eMPUY_zVEjCEv36J17X_TZ7E",
  authDomain: "eva2-6cc08.firebaseapp.com",
  databaseURL: "https://eva2-6cc08.firebaseio.com",
  projectId: "eva2-6cc08",
  storageBucket: "eva2-6cc08.appspot.com",
  messagingSenderId: "424068085640",
  appId: "1:424068085640:web:04bdd7dfaaa1a1be"
});



// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();



function logout() {

  firebase.auth().signOut().then(function () {
    location.href = "index.html";
    window.alert("Se deslogeo del sistema");
  }).catch(function (error) {
    // An error happened.
  });


}
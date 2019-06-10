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

function verDatos() {
    var vertabla = document.getElementById("vertabla").value;

    db.collection(vertabla).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            document.getElementById('tabla').innerHTML += `
            <div class="row">
            <div class="col s3" id>
                <label for="tipo">${doc.id}</label>
            </div>
            <div class="col s3">
                <label for="raza">${doc.data().nombre}</label>
            </div>
            <div class="col s3">

                <label for="raza">${doc.data().raza}</label>
            </div>
            <div class="col s3">
                <label for="raza">${doc.data().razon}</label>
            </div>
        </div>
            `

        });
    });

}
function reload() {

    location.reload();


}
function logout() {

    firebase.auth().signOut().then(function () {
        location.href = "index.html";
        window.alert("Se deslogeo del sistema");
    }).catch(function (error) {
        // An error happened.
    });


}




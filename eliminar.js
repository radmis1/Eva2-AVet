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


function limpiar() {

    limpiarText("perros", "");
    limpiarText("id1", "");
}


function limpiarText(id, result) {
    return document.getElementById(id).value = result;
}


function eliminarDatos() {

    var perro = document.getElementById("perros").value;
    var id1 = document.getElementById("id1").value;
    if (id1.length == 0) {

        alert("Campo Vacio");
    } else {
        db.collection(perro).doc(id1).delete().then(function () {
            alert("Document successfully deleted!");
        }).catch(function (error) {
            alert("Error removing document: ", error);
        });
        limpiarText("perros", "");
        limpiarText("id1", "");

    }
}
function logout() {

    firebase.auth().signOut().then(function () {
        location.href = "index.html";
        window.alert("Se deslogeo del sistema");
    }).catch(function (error) {
        // An error happened.
    });


}
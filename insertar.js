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
    limpiarText("tipo", "");
    limpiarText("rut", "");
    limpiarText("nombre", "");
    limpiarText("raza", "");
    limpiarText("razon", "");
}

function limpiarText(id, result) {
    return document.getElementById(id).value = result;
}

function agregarDatos() {
    var tipo = document.getElementById("tipo").value;
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var raza = document.getElementById("raza").value;
    var razon = document.getElementById("razon").value;

    if (rut.length == 0 || nombre.length == 0 || razon.length == 0 || raza.length == 0) {

        alert("Campos Vacios");
    } else {

        db.collection(tipo).doc(rut).set({

            rut: rut,
            nombre: nombre,
            raza: raza,
            razon: razon,
        })

        alert("Guardado con Exito");
        limpiarText("rut", "");
        limpiarText("nombre", "");
        limpiarText("raza", "");
        limpiarText("razon", "");


    }
}



function logout() {

    firebase.auth().signOut().then(function () {
        location.href = "index.html";
        window.alert("Se ha deslogeado con exito");
    }).catch(function (error) {
        // An error happened.
    });


}

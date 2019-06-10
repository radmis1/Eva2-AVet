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
    limpiarText("numero", "");
    limpiarText("des", "");
}

function limpiarText(id, result) {
    return document.getElementById(id).value = result;
}


function agregarDatos() {
    var tipo = document.getElementById("tipo").value;
    var numero = document.getElementById("numero").value;
    var des = document.getElementById("des").value;

    if (tipo.length == 0 || numero.length == 0 || des.length == 0) {

        window.alert("Campos Vacios");
    } else {

        db.collection("Medicamentos").doc(tipo).set({

            tipo: tipo,
            numero: numero,
            des: des,

        })

        alert("Guardado con Exito");
        limpiarText("tipo", "");
        limpiarText("numero", "");
        limpiarText("des", "");


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
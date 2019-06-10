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


function limpiarText(id, result) {
    return document.getElementById(id).value = result;
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.alert("Bienvenido al sistema")
        location.href = "menu.html";
    } else {


    }
});

function Login() {
    var email = document.getElementById("email_field").value;
    var pass = document.getElementById("pass_field").value;

    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error" + errorMessage)

    });



}























/*
function agregarRut() {

    var rut = document.getElementById("rut").value;

if(nombre.rut==0){

    alert("Campo Vacio");
}else{

        db.collection("usuarios").doc(rut).set({

        rut: rut,
    })}}

function agregarDatos() {

    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;

if(nombre.length==0 || apellido.length==0  || edad.length==0){

    alert("Campos Vacios");
}else{

    db.collection("usuarios").doc(rut).set({

        rut: rut,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
    })

    alert("Guardado con Exito");
    limpiarText("rut","");
    limpiarText("nombre","");
    limpiarText("apellido","");
    limpiarText("edad","");
    limpiarText("id1","")

}}

 /*
function eliminarDatos() {
    var id1 = document.getElementById("id1").value;
    if(id1.length==0){

        alert("Campo Vacio");
    }else{
    db.collection("usuarios").doc(id1).delete().then(function() {
        alert("Document successfully deleted!");
    }).catch(function(error) {
        alert("Error removing document: ", error);
    });
    limpiarText("id1","");



    var removeCam=document.getElementById("id1").value;
    // Remove the 'capital' field from the document
     removeCam= Campos.update({
        id: firebase.firestore.FieldValue.delete(),
        nombre: firebase.firestore.FieldValue.delete(),
    });
    }}
*



function verDatos() {

    db.collection("usuarios").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ",
             doc.data(),rut,
             doc.data(),nombre,
             doc.data(),apellido,
             doc.data(),edad);
        });
    });
}
*/
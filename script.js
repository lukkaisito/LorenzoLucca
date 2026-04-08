function alertMessage() {
    alert("¡Error 404! No quiero hablar con nadie.");
}

function addFriend() {
    const confirmacion = confirm("¿Seguro que quieres ser mi amigo? No soy muy sociable...");
    if (confirmacion) {
        alert("Peticion enviada. Probablemente no sea aceptada.");
    }
}

console.log("%c PROFILE LOADED", "background: #222; color: #bada55");

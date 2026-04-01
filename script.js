function alertMessage() {
    alert("¡Error 404! Revento el servidor de ecom.");
}

function addFriend() {
    const confirmacion = confirm("¿Seguro que quieres ser mi amigo? No soy muy sociable...");
    if (confirmacion) {
        alert("Peticion enviada. Espera 3 a 5 días hábiles (o años).");
    }
}

console.log("%c PROFILE LOADED", "background: #222; color: #bada55");

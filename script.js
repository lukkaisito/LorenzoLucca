function addFriend() {
    const confirmacion = confirm("¿Seguro que quieres ser mi amigo? No soy muy sociable...");
    if (confirmacion) {
        alert("Peticion enviada. Probablemente no sea aceptada.");
    }
}

console.log("%c PROFILE LOADED", "background: #222; color: #bada55");
// Funciones para abrir y cerrar el modal
function openModal() {
    document.getElementById('messageModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
    document.getElementById('formStatus').style.display = 'none'; // Resetea el texto de estado
}

// Cerrar el modal si el usuario hace clic afuera de la caja
window.onclick = function(event) {
    const modal = document.getElementById('messageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Lógica para enviar datos a n8n
document.getElementById('n8nForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar

    const statusText = document.getElementById('formStatus');
    const btnSubmit = document.querySelector('.send-btn');
    
    // Cambiar estado visual mientras carga
    statusText.style.display = 'block';
    statusText.innerText = 'Enviando mensaje...';
    statusText.style.color = 'yellow';
    btnSubmit.disabled = true;

    // Recolectar la data del form
    const payload = {
        nombre: document.getElementById('senderName').value,
        correo: document.getElementById('senderEmail').value,
        mensaje: document.getElementById('messageText').value
    };

    // PONE TU URL DE WEBHOOK DE N8N ACÁ
    const N8N_WEBHOOK_URL =  'https://lukkai7.app.n8n.cloud/workflow/A7zAazgSIsXxtN5l?projectId=ksNSojtYiyuR6K80&new=true'// Funciones para abrir y cerrar el modal
function openModal() {
    document.getElementById('messageModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
    document.getElementById('formStatus').style.display = 'none'; // Resetea el texto de estado
}

// Cerrar el modal si el usuario hace clic afuera de la caja
window.onclick = function(event) {
    const modal = document.getElementById('messageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Lógica para enviar datos a n8n
document.getElementById('n8nForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar

    const statusText = document.getElementById('formStatus');
    const btnSubmit = document.querySelector('.send-btn');
    
    // Cambiar estado visual mientras carga
    statusText.style.display = 'block';
    statusText.innerText = 'Enviando mensaje...';
    statusText.style.color = 'yellow';
    btnSubmit.disabled = true;

    // Recolectar la data del form
    const payload = {
        nombre: document.getElementById('senderName').value,
        correo: document.getElementById('senderEmail').value,
        mensaje: document.getElementById('messageText').value
    };

    // PONE TU URL DE WEBHOOK DE N8N ACÁ
    const N8N_WEBHOOK_URL = 'https://lukkai7.app.n8n.cloud/workflow/A7zAazgSIsXxtN5l?projectId=ksNSojtYiyuR6K80&new=true'; 

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            statusText.innerText = '¡Mensaje enviado con éxito!';
            statusText.style.color = 'lime';
            document.getElementById('n8nForm').reset(); // Limpia los inputs
            
            // Cierra el popup solo después de 2 segundos
            setTimeout(() => {
                closeModal();
            }, 2000);
        } else {
            throw new Error('Error en la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error:', error);
        statusText.innerText = 'Hubo un error al enviar el mensaje.';
        statusText.style.color = 'red';
    } finally {
        btnSubmit.disabled = false; // Vuelve a habilitar el botón
    }
});'; 

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            statusText.innerText = '¡Mensaje enviado con éxito!';
            statusText.style.color = 'lime';
            document.getElementById('n8nForm').reset(); // Limpia los inputs
            
            // Cierra el popup solo después de 2 segundos
            setTimeout(() => {
                closeModal();
            }, 2000);
        } else {
            throw new Error('Error en la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error:', error);
        statusText.innerText = 'Hubo un error al enviar el mensaje.';
        statusText.style.color = 'red';
    } finally {
        btnSubmit.disabled = false; // Vuelve a habilitar el botón
    }
});

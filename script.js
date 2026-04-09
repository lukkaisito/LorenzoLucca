function alertMessage() {
    // Un mensaje bien random para seguir con la estética de la página
    const frases = [
        "No",
        "Otro dia",
        "No quiero hablar con nadie",
        "Brochacho"
    ];
    
    // Elige una frase al azar de la lista
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    
    alert(randomFrase);
}


function openModal() {
    const modal = document.getElementById('messageModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('messageModal');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('formStatus').style.display = 'none';
    }
}


window.onclick = function(event) {
    const modal = document.getElementById('messageModal');
    if (event.target === modal) {
        closeModal();
    }
}


const n8nForm = document.getElementById('n8nForm');
if (n8nForm) {
    n8nForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const statusText = document.getElementById('formStatus');
        const btnSubmit = document.querySelector('.send-btn');
        
        statusText.style.display = 'block';
        statusText.innerText = 'Enviando mensaje...';
        statusText.style.color = 'yellow';
        btnSubmit.disabled = true;

        const payload = {
            nombre: document.getElementById('senderName').value,
            correo: document.getElementById('senderEmail').value,
            mensaje: document.getElementById('messageText').value
        };

        // REEMPLAZÁ ESTA URL POR TU WEBHOOK REAL DE N8N
        const N8N_WEBHOOK_URL = 'https://lukkai7.app.n8n.cloud/workflow/A7zAazgSIsXxtN5l?projectId=ksNSojtYiyuR6K80&new=true'; 

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                statusText.innerText = '¡Mensaje enviado con éxito!';
                statusText.style.color = 'lime';
                n8nForm.reset();
                setTimeout(closeModal, 2000);
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (error) {
            statusText.innerText = 'Error al enviar. ¿Configuraste la URL?';
            statusText.style.color = 'red';
        } finally {
            btnSubmit.disabled = false;
        }
    });
}

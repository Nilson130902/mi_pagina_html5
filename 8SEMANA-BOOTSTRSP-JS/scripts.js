document.addEventListener('DOMContentLoaded', function() {
    // Función para el botón de alerta
    const alertaBtn = document.getElementById('alertaBtn');
    if (alertaBtn) {
        alertaBtn.addEventListener('click', function() {
            alert('¡Esta es una alerta personalizada usando JavaScript!');
        });
    }

    // Validación del formulario
    const formulario = document.getElementById('formularioContacto');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            // Validar campos
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje');
            
            let isValid = true;
            
            if (!nombre.value.trim()) {
                nombre.classList.add('is-invalid');
                isValid = false;
            } else {
                nombre.classList.remove('is-invalid');
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
            }
            
            if (!mensaje.value.trim()) {
                mensaje.classList.add('is-invalid');
                isValid = false;
            } else {
                mensaje.classList.remove('is-invalid');
            }
            
            if (isValid) {
                alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
                formulario.reset();
            }
        });
    }
    
    // Función para validar email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Validación en tiempo real para los campos
    const campos = ['nombre', 'email', 'mensaje'];
    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        if (campo) {
            campo.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.classList.remove('is-invalid');
                }
                
                // Validación especial para email
                if (campoId === 'email' && this.value.trim() && !isValidEmail(this.value)) {
                    this.classList.add('is-invalid');
                }
            });
        }
    });
});
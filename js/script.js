document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    
    // Aquí puedes agregar código para enviar el formulario, si lo deseas
    
    // Mostrar el mensaje de "Mensaje enviado"
    document.getElementById("mensajeEnviado").style.display = "block";
    
    // Puedes agregar más acciones aquí, como limpiar los campos del formulario, etc.
});
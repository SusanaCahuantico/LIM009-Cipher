const offset = document.getElementById("offset");
const mensaje = document.getElementById("mensaje");
const btncifrar = document.getElementById("cifrar");
const btndescifrar = document.getElementById("descifrar");
const resulta = document.getElementById("result");
const clear = document.getElementById("limpiar");

btncifrar.addEventListener("click", () => {
    const mensajeCapturado = mensaje.value.trim(); // Elimina espacios en blanco al inicio y final
    const offsetCapturado = parseInt(offset.value.trim()); // Convierte a número

    if (!mensajeCapturado || isNaN(offsetCapturado)) {
        alert("Por favor, ingresa un mensaje y una clave válida.");
        return;
    }

    resulta.innerHTML = cipher.encode(offsetCapturado, mensajeCapturado);
});

btndescifrar.addEventListener("click", () => {
    const mensajeCapturado = mensaje.value.trim();
    const offsetCapturado = parseInt(offset.value.trim());

    if (!mensajeCapturado || isNaN(offsetCapturado)) {
        alert("Por favor, ingresa un mensaje y una clave válida.");
        return;
    }

    resulta.innerHTML = cipher.decode(offsetCapturado, mensajeCapturado);
});

clear.addEventListener("click", () => {
    mensaje.value = "";
    offset.value = "";
    resulta.innerHTML = "";
});
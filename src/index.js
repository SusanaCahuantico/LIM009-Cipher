const offset = document.getElementById("offset");
const mensaje = document.getElementById("mensaje");
const btncifrar = document.getElementById("cifrar");
const btndescifrar = document.getElementById("descifrar");
const resulta = document.getElementById("result");
const clear = document.getElementById("limpiar");

btncifrar.addEventListener("click", () => {
    const mensajeCapturado = mensaje.value;
    const offsetCapturado = offset.value;
    resulta.innerHTML = cipher.encode(offsetCapturado, mensajeCapturado);
});

btndescifrar.addEventListener("click", () => {
    const mensajeCapturado = mensaje.value;
    const offsetCapturado = offset.value;
    resulta.innerHTML = cipher.decode(offsetCapturado, mensajeCapturado);
});

clear.addEventListener("click", () => {
    mensaje.value = " ";
    offset.value = " ";
    resulta.innerHTML = " ";
});
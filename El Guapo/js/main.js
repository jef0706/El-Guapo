'use strict';

// ======================
// CONSTANTES
// ======================
const carritoTexto = document.querySelector(".cart");
const botonesComprar = document.querySelectorAll(".card button");
const emailInput = document.querySelector(".newsletter input");
const btnEnviar = document.querySelector(".newsletter button");

// ======================
// VARIABLES
// ======================
let carrito = [];
let totalProductos = 0;
let totalCompra = 0;
let suscriptores = [];
let mensaje = "";

// ======================
// PRODUCTOS
// ======================
const productos = [
{ id: 1, nombre: "Chaqueta Baby", precio: 120 },
{ id: 2, nombre: "Pijama Suave", precio: 95 },
{ id: 3, nombre: "Conjunto Premium", precio: 140 },
{ id: 4, nombre: "Body Clásico", precio: 80 }
];

// ======================
// FUNCIONES
// ======================
function actualizarCarrito() {
carritoTexto.textContent = `🛒 Carrito (${totalProductos})`;
}

function calcularTotal() {
totalCompra = carrito.reduce((acumulador, producto) => {
return acumulador + producto.precio;
}, 0);
}

function mostrarResumen() {
calcularTotal();

```
Swal.fire({
    title: "Producto agregado",
    html: `
    <b>Productos:</b> ${totalProductos}<br>
    <b>Total:</b> Q${totalCompra}
    `,
    icon: "success"
});
```

}

function agregarProducto(producto) {
carrito.push(producto);

```
totalProductos++;

actualizarCarrito();

mostrarResumen();
```

}

// ======================
// ARROW FUNCTION
// ======================
const validarCorreo = (correo) => {
return correo.includes("@") && correo.includes(".");
};

// ======================
// BOTONES COMPRAR
// ======================
botonesComprar.forEach((boton, index) => {

```
boton.addEventListener("click", () => {

    try {

        const producto = productos[index];

        if (producto) {
            agregarProducto(producto);
        } else {
            throw new Error("Producto no encontrado");
        }

    } catch (error) {

        Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message
        });

    }

});
```

});

// ======================
// FORMULARIO
// ======================
btnEnviar.addEventListener("click", (e) => {

```
e.preventDefault();

const correo = emailInput.value.trim();

if (validarCorreo(correo)) {

    suscriptores.push(correo);

    Swal.fire({
        icon: "success",
        title: "Suscripción exitosa",
        text: "Gracias por suscribirte"
    });

    emailInput.value = "";

} else {

    Swal.fire({
        icon: "warning",
        title: "Correo inválido",
        text: "Ingresa un correo válido"
    });

}
```

});

// ======================
// JQUERY
// ======================
$(document).ready(function () {

```
$(".hero").hide().fadeIn(1500);

$(".products").hide().slideDown(1500);

$(".card").hover(
    function () {
        $(this).animate({
            marginTop: "-10px"
        }, 200);
    },
    function () {
        $(this).animate({
            marginTop: "0px"
        }, 200);
    }
);
```

});

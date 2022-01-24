
/* PROYECTO FAROLA */

$(document).ready(
    console.log("Listo para ejecutar!"))

//     MOSTRAR TODOS LOS PRODUCTOS DISPONIBLES

const containerProductos = document.querySelector(".article__container")

mostrarProductos(stockProductos)

function mostrarProductos(array) {

    containerProductos.innerHTML="" //reinicia el contenedor, lo vacía pq si no se acumularía

    array.forEach( (producto) => { 
        const div1 = document.createElement("div") //creamos primer div para contener cards
        div1.className = "article__box"
        containerProductos.appendChild(div1)

        const div2 = document.createElement("div") //creamos segundo div para contener la img
        div2.className = "card article__cardbox"
        div2.innerHTML = `<img class='card-img-top'src=${producto.img} alt="" style='width: 20rem;'>`
        div1.appendChild(div2) 
        
        const div3 = document.createElement("div") //creados tercer div para el cardbody
        div3.className= "card-body"
        div3.innerHTML = `
        <p>${producto.marca} </p>
        <p>${producto.modelo}</p>
        <p class='precioProducto'>Precio: ${producto.precio}</p>
        <div class='btnContainer'>  
        <button onclick=agregarAlCarrito(${producto.id}) id=${producto.id} class='boton-agregar btn btn-success'>Agregar al carrito</button>
        </div>
        `   //aprovecho pasarle el evento al producto, es más eficiente.
                
        div2.appendChild(div3)
    });
}



//      FILTRADO MEDIANTE SELECT

//select: nos interesa el value de los select

const selectPrenda = document.querySelector(".select__prendas") 

function filtrar() {     // usar selectPrenda.value te da el valor del atributo 'value' del select en HTML.
    let valorFiltroPrenda = selectPrenda.value //se da a entender que hay varios values 

    let arrayFiltrado = [] //crea un array vacío para poder agregar productos y manejarlo de esa forma, como array.

    if (valorFiltroPrenda == "todo") { //se define que sucederá con cada value
        arrayFiltrado = stockProductos
    } else {//se define el arrayfiltrado sera igual a la prenda seleccionada por el valorFiltroPrenda, que esto es igual al select Original.
        arrayFiltrado = stockProductos.filter( elemento => elemento.prenda == valorFiltroPrenda)

    }

    mostrarProductos(arrayFiltrado) //se ejecuta mostrarProductos pero con el array filtrado
}

selectPrenda.addEventListener("change", () => {
    filtrar()
})
 

//    MODAL (ABRIR Y CERRAR)

const btnAbrir = document.querySelector(".modal__btnAbrir")
const btnCerrar = document.querySelector(".modal__btnCerrar")
const modalContainer = document.querySelector(".modal-container")

btnAbrir.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active")
    modalContainer.classList.toggle("modal")
})

btnCerrar.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active")
    modalContainer.classList.toggle("modal")
})

// AGREGAR AL CARRITO -

const carrito = []
const productosCarrito = document.querySelector(".table tbody")

let precioTotal = document.querySelector(".precioTotal")
let badgeCarrito = document.querySelector(".carrito__contador")

$(".boton-agregar")
console.log($(".boton-agregar"))
//selecciono donde poner los productos en la tabla

function agregarAlCarrito(itemId) {

    let itemCarrito = carrito.find(el => el.id == itemId)

    if (itemCarrito) {
        itemCarrito.cantidad += 1
    } else {
        let {id, marca, modelo, precio} = stockProductos.find( el=> el.id == itemId)
        carrito.push({id, marca, modelo, precio, cantidad: 1})
    }
    
    $(".header").append(`<div class='alert alert-success alert-dismissible fade show' role='alert'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-bag-check-fill' viewBox='0 0 16 16'>
                            <path fill-rule='evenodd' d='M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z'/>
                            </svg>
                            PRODUCTO AGREGADO AL CARRITO CON EXITO!
                            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                        </div>`);


    actualizarCarrito();


}





function actualizarCarrito() {
    productosCarrito.innerHTML=``

    carrito.forEach( (producto)=> {


        const tr = document.createElement("tr") //creo una fila y agrego a la tabla
        tr.innerHTML = `<th>${producto.cantidad}</th>
                    <td>${producto.marca}</td>
                    <td>${producto.modelo}</td>
                    <td>${producto.precio * producto.cantidad}</td>
                    <td><button onclick=eliminarDelCarrito(${producto.id}) type="button" class="btn-close" aria-label="Close"></button></td>
                    `
        productosCarrito.appendChild(tr)
    })

    badgeCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce( (acc, el) => acc + (el.precio * el.cantidad), 0)
}  // reduce: recorre el array que se llama, genera un calculo y lo reduce a un valor. 


//    ELIMINAR DEL CARRITO 

function eliminarDelCarrito(itemId) {

    let productoEliminar = carrito.find(el => el.id == itemId)

    productoEliminar.cantidad--

    if(productoEliminar.cantidad == 0) {
        let indice = carrito.indexOf(productoEliminar)
        carrito.splice(indice, 1)
    }
    
    actualizarCarrito();
    
}

$(document).ready( () => {console.log("document listo")})


/* CONTADOR SIMPLE */

/* const contadorCarrito = document.querySelector(".carrito")
const spanContador = document.querySelector(".carrito__contador")
let contador = 0

contadorCarrito.addEventListener("click", e => {
    if (e.target.classList.contains("btn-info")) {
        contador++
        spanContador.textContent = contador
    } else if (e.target.classList.contains("btn-danger")) {
        contador--
        spanContador.textContent = contador
    }
    e.stopPropagation()
})

 */

//Corroborar Passwords identicas del registro
function validarPasswords(){
    var pass=document.getElementsById("contrasena").value;
    var repass=document.getElementsById("recontrasena").value;
    if(!pass.equals(repass)){
        pass.focus();
        alert('Las contraseñas no coinciden.');
        return false;
    }
}

const carrito = document.getElementById('carrito');
const elementos1= document.getElementById('lista-1');
const lista= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);


}


function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento= e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

//Leer datos del Carrito
function leerDatosElemento(elemento){
    const infoElemento={
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('p').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

//Insertar items al carrito
function insertarCarrito(elemento){

    const row= document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 />
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id="${elemento}">  X</a>
        </td>
    `;

    lista.appendChild(row);
}

//Eliminar elementos individuales del carro
function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId= elemento.querySelector('a').getAttribute('data-id');
    }
}

//Vaciar carrito
function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}

/* CONSTRUCTOR DE PRODUCTOS */
class Productos{
    constructor (productos){
        this.id = productos.id;
        this.articulo = productos.articulo;
        this.nombre = productos.nombre;
        this.marca = productos.marca;
        this.precio = productos.precio;
        this.stock = productos.stock;
        this.img = productos.img;
        this.cantidad = productos.cantidad;
    }
}
const lg800221 = new Productos ({id:1, articulo:"Monitor", nombre:"Monitor LG21 Pulgadas", marca:"LG",precio:1532, stock:20, img:'./Imagenes/Productos/lg800221.jfif', cantidad:1});
const amdRyzen3600 = new Productos ({id:2,articulo:"Procesador", nombre:"Procesador Ryzen3600G", marca:"AMD",precio:13532, stock:05, img:'./Imagenes/Productos/amdRyzen3600.jpg' , cantidad:1});
const hp200545 = new Productos ({id:3, articulo:"Monitor", nombre:"Monitor HP24 Pulgadas", marca:"HP",precio:1892,stock:15, img:'./Imagenes/Productos/hp200545.jpg', cantidad:1});
const hp100225 = new Productos ({id:4, articulo:"Monitor", nombre:"Monitor HP27 Pulgadas", marca:"HP",precio:2022,stock:7, img:'./Imagenes/Productos/hp100225.jpg', cantidad:1});
const redDragon1212 = new Productos ({id:5, articulo:"Mouse", nombre:"Mouse Gammer Red Dragon", marca:"Red Dragon", precio:800, stock:15, img:'./Imagenes/Productos/redDragon1212.jpg', cantidad:1});
const redDragon1002 = new Productos ({id:6, articulo:"Teclado", nombre:"Teclado Mecanico Red Dragon", marca:"Red Dragon", precio:1200, stock:9, img:'./Imagenes/Productos/redDragon1002.jpg', cantidad:1});
const logitecBass = new Productos ({id:7, articulo:"Auriculares", nombre:"Auriculares Full Bass Logitec", marca:"Logitec", precio:990, stock:3, img:'./Imagenes/Productos/logitecBass.jpg', cantidad:1});
const logitecMini = new Productos ({id:8, articulo:"Auriculares", nombre:"Auriculares Mini Logitec", marca:"Logitec", precio:400, stock:5, img:'./Imagenes/Productos/logitecMini.jpg', cantidad:1});
const ks16gb = new Productos ({id:9, articulo:"Memoria RAM", nombre:"Memoria RAM DDR4 KGS", marca:"Kingston", precio:600, stock:20, img:'./Imagenes/Productos/ks16gb.jpg', cantidad:1});
const cs16gb = new Productos ({id:10, articulo:"Memoria RAM", nombre:"Memoria RAM DDR4 Revange Corsair", marca:"Corsair", precio:800, stock:20, img:'./Imagenes/Productos/cs16gb.png', cantidad:1});

let listaDeProductos = [lg800221, amdRyzen3600, hp200545, hp100225, redDragon1212, redDragon1002, logitecBass, logitecMini, ks16gb, cs16gb];

let carritoDeCompras = [];

/* CONSTANTES GLOBALES */
const contenedorProducto = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('carrito-contador');
const precioTotal = document.getElementById('precioTotal');

const selecTipo = document.getElementById('selecTipo');

/* FILTRO PARA SELECCION DE PRODUCTOS */
selecTipo.addEventListener('change',()=>{
    if(selecTipo.value == "all"){
        mostrarProductos(listaDeProductos);
    }else{
        mostrarProductos(listaDeProductos.filter(elemento => elemento.articulo == selecTipo.value));
    }
})

mostrarProductos(listaDeProductos);

/* MOSTRAR PRODUCTOS EN EL HTML */
function mostrarProductos(array){
   contenedorProducto.innerHTML = "";
   array.forEach(element => {
       let div = document.createElement('div')
       div.classList.add('container-card')
       div.innerHTML += `<div class="card text-white bg-dark mb-2" style="max-width: 98%">
                             <div class="row g-0">
                                <div class="col-md-3">
                               <img src="${element.img}" class="img-fluid rounded-start">
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                    <h5 class="card-title">${element.nombre}</h5>
                                    <p class="card-text">Marca: ${element.marca}</p>
                                    <p class="card-text">Stock: ${element.stock}</p>
                                    <p class="card-text"><small class="text-muted">Precio: $${element.precio}</small></p>
                                    <button tipe="button btn" class="btn btn-primary" id="boton${element.id}">A??adir a Carrito</button>
                                    </div>
                                </div>
                           </div>
                        </div>`
        contenedorProducto.appendChild(div);

        let boton = document.getElementById(`boton${element.id}`)
        boton.addEventListener('click', () =>{
            agregarAlCarrito(`${element.id}`)
        })
   });
}

/* AGREGAR LOS PRODUCTOS AL CARRITO */
function agregarAlCarrito(id){
        let repetido = carritoDeCompras.find(elemento => elemento.id == id)
        if(repetido){
            repetido.cantidad = repetido.cantidad + 1 
            document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p class="card-text" id="cantidad${repetido.id}">Cantidad: ${repetido.cantidad}</p>`
            actualizarCarrito();
        }else{
            let productoAgregar = listaDeProductos.find(elemento => elemento.id == id);

            carritoDeCompras.push(productoAgregar)
            
            actualizarCarrito()
    
            let div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                             <div class="row g-0">
                            <div class="col-md-4">
                             <img src="${productoAgregar.img}" class="img-fluid rounded-start" alt="...">
                            </div>
                              <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">${productoAgregar.nombre}</h5>
                            <p class="card-text" id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>
                            <p class="card-text"><small class="text-muted">Precio Unitario ${productoAgregar.precio}</small></p>
                        </div>
                        </div>
                        
                    </div>
                    <button class="botonEliminar" id="eliminar${productoAgregar.id}"><i class="fas fa-trash"></i>
                    <p class="textBoton">Eliminar Producto</p>
                    </button>
                </div>`
            contenedorCarrito.appendChild(div);
            
            let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
            botonEliminar.addEventListener('click', ()=>{
        
                botonEliminar.parentElement.remove();
                carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != productoAgregar.id)
                actualizarCarrito();
        
            })
        }
}

/* INTERACTUAR CON EL CARRITO */
function actualizarCarrito(){
      contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
      precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
}




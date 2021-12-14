alert("Bienvenidos a la tienda virtual de Compumac, soy Trony su asistente virtual");
const menuInicio = prompt("Elija la opción deseada: \n 1. Catalogo de Productos \n 2. Productos destacados de la semana \n 3. Soporte Técnico \n 4. Facturación \n 5. Devoluciones y reclamos");

class Productos{
    constructor (productos){
        this.articulo = productos.articulo;
        this.marca = productos.marca;
        this.precio = productos.precio;
        this.stock = productos.stock;
    }
}

const lg800221 = new Productos ({articulo:"Monitor", marca:"LG",precio:1532,stock:20});
const hp200545 = new Productos ({articulo:"Monitor", marca:"HP",precio:1892,stock:15});
const hp100225 = new Productos ({articulo:"Monitor", marca:"HP",precio:2022,stock:7});
const redDragon1212 = new Productos ({articulo:"Mouse", marca:"Red Dragon", precio:800, stock:15});
const redDragon1002 = new Productos ({articulo:"Teclado", marca:"Red Dragon", precio:1200, stock:9});
const logitecBass = new Productos ({articulo:"Auriculares", marca:"Logitec", precio:990, stock:3});
const logitecMini = new Productos ({articulo:"Auriculares", marca:"Logitec", precio:400, stock:5});
const ks16gb = new Productos ({articulo:"Memoria RAM", marca:"Kingston", precio:600, stock:20});
const cs16gb = new Productos ({articulo:"Memoria RAM", marca:"Corsair", precio:800, stock:20});

/* const procesoDeCompra = () */
alert("Bienvenidos a la tienda virtual de Compumac, soy Trony su asistente virtual");
let menuInicio = prompt("Elija la opción deseada: \n 1. Catalogo de Productos \n 2. Productos destacados de la semana \n 3. Soporte Técnico \n 4. Devoluciones y reclamos");

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

let listaDeProductos = [lg800221, hp200545, hp100225, redDragon1212, redDragon1002, logitecBass, logitecMini, ks16gb, cs16gb]
console.log(listaDeProductos.sort((a,b) => b.precio - a.precio));

while (menuInicio != ""){
        switch(menuInicio){
            case "1":
                console.log(listaDeProductos);
                menuInicio = "";
                break;
            case "2":
                const listaDestacados = listaDeProductos.filter(destacado => destacado.precio <=900);
                console.log(listaDestacados);
                menuInicio = "";
                break;
            case "3":
                prompt("Ingrese su nombre completo");
                prompt("ingrese su email");
                prompt("ingrese su número de telefono");
                prompt("ingrese una breve descripción del problema");
                alert("En la brevedad un asesor comercial se contactará con usted. Gracias por elegirnos");
                let ayudarlo = prompt("Puedo ayudarlo con algo más? \n ingrese la opción deseada \n SI \n NO");
                if (ayudarlo.toLocaleUpperCase() === "SI"){
                    menuInicio = prompt("Elija la opción deseada: \n 1. Catalogo de Productos \n 2. Productos destacados de la semana \n 3. Soporte Técnico \n 4. Devoluciones y reclamos");
                }else if (ayudarlo.toLocaleUpperCase() === "NO"){
                    alert("Gracias por elegír CompuMac");
                    menuInicio = "";
                    break;
                }
                
            case "4":
                let numeroFactura = prompt("Bienvenido a la central de devoluciones de CompuMac, por favor ingrese su número de factura por el la cual se proceso su reclamo/devolución");
                parseInt(numeroFactura);
                if (numeroFactura >= 1200){
                    alert("La reparación del componente principal se encuentra en proceso, puede demorar entre 48 y 72hs, le pedimos disculpas por la demora");
                }else if(numeroFactura < 1000)
                    alert("Ya esta autorizada su devolución, número de orden 456812, puede pasar por la oficina central para retirarla");
                else{
                    alert("Su pedido se encuentra en período de evaluación, en las próximas 24 hs nos comunicaremos con usted.");
                }
                ayudarlo = prompt("Puedo ayudarlo con algo más? \n ingrese la opción deseada \n SI \n NO");
                if (ayudarlo.toLocaleUpperCase() === "SI"){
                    menuInicio = prompt("Elija la opción deseada: \n 1. Catalogo de Productos \n 2. Productos destacados de la semana \n 3. Soporte Técnico \n 4. Devoluciones y reclamos");
                }else if (ayudarlo.toLocaleUpperCase() === "NO"){
                    alert("Gracias por elegír CompuMac");
                    menuInicio = "";
                    break;
                }
        }
    }



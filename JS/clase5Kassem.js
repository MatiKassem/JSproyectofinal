class Procesador{
    ​
        constructor(procesador){
    ​
            this.marca = procesador.marca;
            this.generacion = procesador.generacion;
            this.velocidad = procesador.velocidad;
            this.precio = procesador.precio;
            this.limite = procesador.limite;
            this.stock = procesador.stock;
    ​
        }
    ​
        overclockNormal = ()=>{
    ​
            if(this.limite == "overclock"){
    ​
                this.limite = "Normal";
    ​
            }else{
    ​
                this.limite = "overclock";
            }
        }
    ​
        facturaA = ()=>{
    ​
            this.precio = (this.precio * 0.21) + (this.precio / 0.9);
        }
        
        facturaC = ()=>{
            ​
                    this.precio = this.precio / 0.9;
                }
    ​
        comprarProcesador = (cantidad)=>{
    ​
           
            if(cantidad <= this.stock){
    ​
                    this.stock = this.stock - cantidad;
    ​
            }else{
    ​
                console.log("No esta disponible la cantidad que quiere comprar")
            }
        }
    ​
        enOferta = (descuento)=>{
    ​
            this.precio = this.precio - (this.precio * descuento);
        }
    ​    ​
    }
    const RYZEN53800 = new Procesador({marca:"AMD",generacion:"Quinta",velocidad:"2.4Ghz",precio:11550,limite:"normal",stock:5})

    console.log(RYZEN53800);

    alert("bienvenido a Tecnomax, el sitio web número 1 de ventas en insumos informaticos");
    const compraUsuario = parseInt(prompt("Cuantos procesadores desea?"));
    ​
    RYZEN53800.facturaA();
    RYZEN53800.comprarProcesador(compraUsuario);
    RYZEN53800.enOferta(0.85);
    ​
    console.log(RYZEN53800);
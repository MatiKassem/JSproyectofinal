class Datos {
    constructor(nombre, edad, email, sugerencia){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.sugerencia = sugerencia; 
    }
}

let baseDeDatos = [];

$(()=>{
   $('#formularioContacto').submit((e) => {
      e.preventDefault();
      
      let datosForm = new Datos($('#nombre').val(),$('#edad').val(),$('#eMail').val(),$('#sugerencia').val());
      console.log(datosForm);
      baseDeDatos.push(datosForm);
      localStorage.setItem('comentariosCapturados', JSON.stringify(baseDeDatos));
      $('#formularioContacto').trigger("reset");
   })
})
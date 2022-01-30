$(document).ready(function()
{
  console.log("domready")
});
//registro de un nuevo cliente
$("#registrarse").on('click',function(){
  
  //removemos el icono de usuarios
  $(".fas").remove();
  
  //agregamos icon de usuario registrandose
  $("#loginIcon").append(`
                        <i class="fas fa-user-plus"></i>
  `); 

  //creamos y editamos el HTML
  $("#loginBox").append(`<form>
                          <input placeholder="nombre" type="text" id="inputNombre"></input>
                          <input placeholder="apellido" type="text" id="inputApellido"></input>
                          <input placeholder="numero" type="number" id="inputNumero"></input>
                          <button type="sumbit" id="botonRegistro">Registrarse!</button>
                        </form>
  `)

  //retiramos el boton de registrarse
  $("#registrarse").remove();

  //detectamos el click en el boton
  $("#botonRegistro").on('click', function(event){

    //evitamos que se recargue la pagina
    event.preventDefault();

    //recuperamos los datos del form
    let nombre = $("#inputNombre").val();
    let apellido = $("#inputApellido").val();
    let telefono = $("#inputNumero").val();

    //guardamos los datos en el local Storage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('numero', telefono);

  })
  
})

//ingreso de un cliente
$("#ingresar").on('click', function(){

  //tomamos los datos para compararlos con los datos del storage
  $("#loginBox").append(`
                        <input placeholder="nombre" type="text" id="inputNombre"></input>
                        <input placeholder="numero" type="number" id="inputNumero"></input>
                        <button type="sumbit" id="botonIngreso">Ingresar!</button>
  `)

  //registramos el click del boton que agregamos
  $("#botonIngreso").on('click', function(event){

    //evitamos q se recargue la web
    event.preventDefault();

    //recuperamos datos del form
    let nombre = $("#inputNombre").val();



    //comparamos datos con el local storage 
    if (nombre ==! localStorage.nombre){
      
      //aplicamos un icon de ingreso
      $(".fas").remove();

      //agregamos icon de usuario ingresado
      $("#loginIcon").append(`
                              <i class="fa-solid fa-user-check"></i>
      `); 

      //le damos la bienvenida al cliente
      $("#loginBox").append(`
                            <h2> bienvenido</h2> $('nombre')
      `)
      //removemos el ingresar
      $("#ingresar").remove();

      //removemos el registrarse
      $("#registrarse").remove();

    }
    
  })
})

        




//creacion de usuario cmo objeto
class Usuario{
  constructor(nombre, apellido, numero){
    this.nombre = nombre;
    this.apellido = apellido;
    this.numero = numero;
  }
}
//nuevo usuario
const usuario1 = new Usuario(localStorage.nombre, localStorage.apellido, localStorage.telefono);

//array de usuarios
const listaCliente = [];
listaCliente.push(Usuario);

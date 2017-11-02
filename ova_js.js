
function desaparicion_Intro(){
setTimeout(
function(){
  var ñ = document.getElementById("botones").style.display = "none";
  document.getElementsByClassName("contenedor-ovar").innerHTML = ñ;
  document.getElementById("img1").style.display = "none";
  document.getElementById("cargando-animacion").style.display = "none";
  /*if(document.getElementsByClassName("botones").style.display == 'none'){
        document.getElementsByClassName("botones").style.display = 'block';
    }else{
       document.getElementsByClassName("botones").style.display='none';
    }*/
  },4000);
}
desaparicion_Intro();

function aparicion_Menu(){
  setTimeout(
    function(){
      document.getElementById("botones").style.display = "block";
    },4800);
}
aparicion_Menu();

function boton_primero() {
  confirm("Prueba!!!");
}

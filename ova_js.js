
function desaparicion_Intro(){
setTimeout(
function(){
  document.getElementById("botones").style.display = "none";
  document.getElementById("img1").style.display = "none";
  document.getElementById("cargando-animacion").style.display = "none";
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
  document.getElementById('formulario').style.display = 'block';
  document.getElementById("botones").style.display = "none";
  document.getElementById('ova').style.display = "block";
  var datos = document.getElementById('prompt');
  var aleatorio = Math.floor(Math.random()*datos.length);
  datos.splice(aleatorio, 1);

  var cuestionario = document.getElementById('div[value=encabezadoPreguntas]');
  var verdadero = document.querySelector('buttom[value=verdadero]');
  var falso = document.getElementById('buttom[value=falso]');

  if (document.querySelector('primero').onClick == true){
    document.getElementById("segundo").disabled = true;
    document.getElementById("tercero").disabled = true;


      var pregunta = [[datos[aleatorio],"verdadero","falso"]];
      formulario.cuestionario.value = pregunta[0][0];
      formulario.verdadero.value = pregunta[0][1];
      formulario.falso.value = pregunta[0][2];
  }

}
boton_primero();

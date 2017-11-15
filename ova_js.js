
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
  var encabezado = ["¿Comiste?","¿Saltaste?","¿Corriste?","¿Caminaste?","¿Callaste?","¿Hablaste?","¿Dormiste?"];
  var obtenerAleatorio = function(){
    return encabezado[Math.floor(Math.random()*encabezado.length)];
  };

  var verdadero = document.querySelector('buttom[value=verdadero]');
  var falso = document.getElementById('buttom[value=falso]');

  if $('#primero').click(function(){
    $(".prompt").html(obtenerAleatorio());
  });
}
boton_primero();

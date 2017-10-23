function desaparicion_Intro(){
setTimeout(
function(){
  document.getElementById("ova").style.visibility = "hidden";
  document.getElementById("img1").style.display = "none";
  document.getElementById("cargando-animacion").style.display = "none";
},4000);
}
desaparicion_Intro();

function aparicion_Menu(){
  setTimeout(
  function(){    
    document.getElementById("ova").style.visibility = "visible";
    document.getElementById('img2').style.display = "block";
  },4800);
}
aparicion_Menu();

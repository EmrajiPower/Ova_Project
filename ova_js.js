
function desaparicion_Intro(){
setTimeout(
function(){
  document.getElementById("ova").style.display = "none";
  if(document.getElementsByClassName("botones").style.display == 'none'){
        document.getElementsByClassName("botones").style.display = 'block';
    }else{
       document.getElementsByClassName("botones").style.display='none';
    }
  },4000);
}
desaparicion_Intro();

function aparicion_Menu(){
  setTimeout(
    function(){
      document.getElementsByClassName("botones").style.display = "block";
    },4800);
}
aparicion_Menu();

function seleccion_de_botones(){

}

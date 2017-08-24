$(document).ready(function() {
    CambioPag();
});

var contador = new Number();
var contador =  3;

function CambioPag(){
  if((contador - 1) >= 0){
    contador = contador -1;
    console.log(contador);
    setTimeout('CambioPag();', 1000);
  } else {
    $(window).attr('location','pantalla6.html')
  }
};
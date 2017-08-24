$(document).ready(function() {
    Disparar();
});

var contador = new Number();
var contador =  3;

function Disparar(){
  if((contador - 1) >= 0){
    contador = contador -1;
    $("#tiempo").text(contador);
    setTimeout('Disparar();', 1000);
  } else {
    $(window).attr('location','pantalla6.html')
  }
};
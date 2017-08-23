var telefono = localStorage.getItem("telefono");
$(document).ready(function() {
    $.ajax({
        url : '/api/registerNumber',
        type : 'POST',
        data : {
            'phone' : telefono,
            'terms' : 'true'
        },
    })
    .done(function(respuesta){
        console.log("success");
        console.log(respuesta);
    })
    .fail(function(){
        console.log("error");
    });
   
    $('#numero').html(telefono);    
    Reenviar();
    Disparar();
});

var contador = new Number();
var contador =  21;

function Disparar(){
  if((contador - 1) >= 0){
    contador = contador -1;
    $("#tiempo").text(contador);
    setTimeout('Disparar();', 1000);
  } else {
    Reenviar();
    contador = 21;
  }
};
function Reenviar() {
    $.ajax({
        url: '/api/resendCode',
        type: 'POST',
        data: {'phone' : telefono,
                'terms' : 'true'
        }
    })
    .done(function(respuesta){
        console.log("success");
        console.log(respuesta);
        console.log(respuesta.data);
        var code = respuesta.data;
        localStorage.setItem("codigo", code);
        var codigoStorage = localStorage.getItem("codigo");
        alert("Su código es: " + codigoStorage);
        Disparar();
    })
    .fail(function(){
        console.log("error");
    });
};
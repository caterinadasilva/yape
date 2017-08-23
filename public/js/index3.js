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

    $('#code_input').on("focus", function(){
        $('#code_input').unbind('keyup change input paste').bind('keyup change input paste',function(e){
            var codigo = localStorage.getItem("codigoValidacion");
            if($('#code_input').val() == codigo){
                $(window).attr('location','pantalla4.html')
            }
        });
    });
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
        localStorage.setItem("codigoValidacion", code);
        var codigo = localStorage.getItem("codigoValidacion");
        alert("Su código es: " + codigo);
        Disparar();
    })
    .fail(function(){
        console.log("error");
    });
};
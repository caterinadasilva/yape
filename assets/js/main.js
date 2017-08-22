$(document).ready(function() {
	$.ajax({
        url : '/api/registerNumber',
        type : 'POST',
        data : {
        	'phone' : '91781128',
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
});
$(document).ready(function(){
	$(document).on('keyup', '#name_input', function (event) {
	    var regex = new RegExp("^[a-zA-Z ]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    var nombre = $("#name_input").val();
	    if (regex.test(key)) {
	        localStorage.setItem("nombre", nombre);
	        console.log("Nombre: " + nombre);
	        Check();
	    }
	});

	$(document).on('keyup', '#email_input', function (event) {
	    var email = $("#email_input").val();
	    var emailLength = email.length;
	    var min = 6;
	    if ( emailLength > min ) {
	    	localStorage.setItem("email", email);
	    	console.log("Email: " + email);
	    	Check();
	    }
	});

	$(document).on('keyup', '#pass_input', function (event) {
	    var pass = $("#pass_input").val();
	    var passLength = pass.length;
	    var max = 6;
	    if ( pass > max ) {
	        console.log("La clave debe tener máximo 6 caracteres.");
	    } else {
	    	localStorage.setItem("password", pass);
	    	console.log("Password: " + pass);
	    	Check();
	    }
	});

	$('#next-btn5').on('click', function(event) {
		var name = localStorage.getItem("nombre");
	    var email = localStorage.getItem("email");
	    var pass = localStorage.getItem("password");
	    var tel = localStorage.getItem("telefono");

        $.ajax({
            url : '/api/createUser',
            type : 'POST',
            data : {
                'phone' : tel,
                'name'  : name,
                'email' : email,
                'password' : pass
            },
        })
        .done(function(respuesta){
            console.log("success");
            console.log(respuesta);
            $(window).attr('location','index5.html');
        })
        .fail(function(){
            console.log("error");
        });
    });
});
function Check() {
	var name = localStorage.getItem("nombre");
    var email = localStorage.getItem("email");
    var pass = localStorage.getItem("password");
    
    if ( name.length != 0 && email.length != 0 && pass.length != 0 ) {
        $('#next-btn5').removeAttr('disabled');
    } else {
        $('#next-btn5').attr('disabled', 'true');
    }
}
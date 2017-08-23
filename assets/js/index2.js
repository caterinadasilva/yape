$(document).ready(function() {
    $('#telephone').on("focus", function(){
        $('#telephone').unbind('keyup change input paste').bind('keyup change input paste',function(e){
            var $this = $(this);
            var val = $this.val();
            var valLength = val.length;
            var maxCount = 9;
            if(valLength == maxCount){
                $this.val($this.val().substring(0,maxCount));
                var num = $('#telephone').val();
                $('#filled-in-box').removeAttr('disabled');
                $("#filled-in-box").focus();
                console.log("número ingresado: " + num);
                localStorage.setItem("telefono", num);
            }
        });
    });
    $("#filled-in-box").on('change', function() {
        if( $(this).is(':checked') ) {
            $('#next-btn').removeAttr('disabled');
            $("#next-btn").focus();
        } else {
            $('#next-btn').attr('disabled', 'true');
        }
    });

    $('#next-btn').on('click', function(event) {
        $.ajax({
            url : '/api/registerNumber',
            type : 'POST',
            data : {
                'phone' : num,
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
});
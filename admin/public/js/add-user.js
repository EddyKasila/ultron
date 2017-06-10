$(document).ready(function(){

// Once a user clicks send buttom

$('#btn-user').click(function(e){

e.preventDefault();
// Grab the values 
$('#btn-user').html('<i class="fa fa-2x fa-spinner fa-spin"></i>');

        var email       = $('#email').val();
        var username    = $('#username').val();
        var password    = $('#password').val();
        var confirm     = $('#c_password').val();

//Change button to a rotate using FA to show processing

	
	});

});
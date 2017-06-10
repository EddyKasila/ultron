$(document).ready(function()
	{$('#login').click(function(e){
			 e.preventDefault();
			 
			 var email = $('#email').val();
			 var password = $('#password').val();
			
			$('#login').html('<i class="fa fa-refresh fa-spin"></i>'); 
		if(email == '' || password == '')
		{
		   $('#result').html('<div class="alert alert-warning "><div class="col-md-offset-2"><i class="fa fa-exclamation-triangle"></i>Please fill all the fields</div></div>');
		   
		} else if((password.length)<8){
		  $('#result').html('<div class="alert alert-warning "><div class="col-md-offset-"><i class="fa fa-exclamation-triangle"></i>Password is too short.</div></div>');
		   
		} else {
		
		    $.post("admin.login.php",
			{	
			  email:email,
			  password:password
			},
			   function (data) {
                    //response from the php
					
                     alert(data);
                      //resets the form
						
                   
					
              });

			  } 
				     $('#login').html('Login');
		         
					});

					
				});
 
				
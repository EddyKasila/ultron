<!--Registration of students-->
<?php
require 'config/connect.php';

		$db = mysqli_select_db($conn,"project2");
    #Variables

     $email       = htmlentities(mysql_escape_string($_POST['email']));
     $username    = htmlentities(mysql_escape_string($_POST['username']));
     $password    = htmlentities(mysql_escape_string($_POST['password']));
     $confirm    = htmlentities(mysql_escape_string($_POST['confirm']));
	 $hash_password = $_POST['password'];
     
     #validation
     if(! filter_var($email, FILTER_VALIDATE_EMAIL)){
			  	echo('<div class="alert alert-warning"><div class="col-md-offset-4"><i class="fa fa-exclamation-triangle"></i>Please check your email format</div></div>');
	   } else {
      
        #Update records to the database
    $query = mysqli_query($conn,"SELECT * FROM admin WHERE email_address='$email'");
	$new_record = "INSERT INTO admin(username,email,password) VALUES ('$username','$email','$hash_password')";
	if( $query == true )
    {
		if(mysqli_query($conn,$new_record)){
		
              echo('<div class="alert alert-success"><div class="col-md-offset-4"><i class="fa fa-check-circle"></i>Successfully registered</div></div>');
    }else
        {
              echo('<div class="alert alert-warning col-md-offset-4"><div class="col-md-offset-4"><i class="fa fa-exclamation-triangle"></i>Error: Could not register please try again later.</div></div>');
	   mysqli_error($conn);
		}
		
    } else{
		exit('<div class="alert alert-warning"><div class="col-md-offset-4"><i class="fa fa-exclamation-triangle"></i>The email is already registered.</div></div>');
	}}
?>
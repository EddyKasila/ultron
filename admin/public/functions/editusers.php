<!--Editing a user-->
<?php
$conn = @mysqli_connect("localhost", "root", "" ,"videovending");

    #Variables
    $id; $name; $user; $location; $email; $phone; 
    
    #Post Variables
    $id = $_POST['id'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $location = $_POST['location'];
    $email = $_POST['email'];
    $user = strtolower($_POST['user']);
    #Get the id of the movie i the database
        $edit = "UPDATE users SET username='$user', name='$name', location='$location', email='$email', phone_no='$phone' WHERE id='$id' ";
            if(mysqli_query($conn,$edit)){
            
             echo '<div class="alert alert-success"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-check-circle"></i>Change successful.</div></div>';
        }else
        {
           
             echo '<div class="alert alert-danger"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-exclamation-triangle"></i>Something went wrong.Please try again.</div></div>';
      
        }


?>
             
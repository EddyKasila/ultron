<?php
$conn = @mysqli_connect("localhost", "root", "" ,"videovending");


    $title; $user; $qnty; $total; $movieid;
 
    $movieid = $_POST['id'];
    $title = $_POST['title'];
    $user = strtolower($_POST['user']);
    $qnty = $_POST['qnty'];
    $total = $_POST['total'];   
        $new_record = "INSERT INTO bookings(movieid,movie,user,quantity,totalcost) 
        VALUES ('$movieid','$title','$user','$qnty','$total') ";
            if(mysqli_query($conn,$new_record)){
            
             echo '<div class="alert alert-success"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-check-circle"></i>Movie booking successful.</div></div>';
        }else
        {
           
             echo '<div class="alert alert-danger"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-exclamation-triangle"></i>Something went wrong.Please try again.</div></div>';
      
        }


?>
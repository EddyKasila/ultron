<?php
$conn = @mysqli_connect("localhost", "root", "" ,"videovending");
   if(isset($_REQUEST['del']))  
   { 
        $id = $_GET['id'];  
        $sql = "DELETE FROM movies WHERE id='$id'";      

        if(mysqli_query($conn,$sql))
        {    
             echo '<div class="alert alert-success"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-check-circle"></i>Movie upload successful.</div></div>';
        }else
        {
           
             echo '<div class="alert alert-danger"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-exclamation-triangle"></i>Something went wrong.Please try again.</div></div>';
      
        }
   }


?>
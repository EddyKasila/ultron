<!--Adding a new movie-->
<?php
$conn = @mysqli_connect("localhost", "root", "" ,"videovending");

    #Variables
    $id; $title; $cast; $posted; $desc; $category;
    
    #Post Variables
    $id = $_POST['id'];
    $title = $_POST['title'];
    $cast = $_POST['cast'];
    $cost = $_POST['cost'];
    $category = strtolower($_POST['category']);
    $desc = $_POST['desc'];
    $posted = date("d/m/y");    

    #Get the id of the movie i the database
        $edit = "UPDATE movies SET title='$title', cast='$cast', cost='$cost', posted=$posted, category='$category', description='$desc' WHERE id='$id' ";
            if(mysqli_query($conn,$edit)){
            
             echo '<div class="alert alert-success"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-check-circle"></i>Change successful.</div></div>';
        }else
        {
           
             echo '<div class="alert alert-danger"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-exclamation-triangle"></i>Something went wrong.Please try again.</div></div>';
      
        }


?>
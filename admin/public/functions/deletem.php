<?php

require '../../config/connect.php';
$id;
$id = $_GET['delete_id'];
if(isset($_GET['delete_id']))
  {
    $sqli = "DELETE FROM movies WHERE id='$id'";
    mysqli_query($conn,$sqli);
     echo('<script>window.location="../movieslist.php";</script>');    
  }
     
?>
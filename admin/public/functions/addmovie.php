<!--Adding a new movie-->
<?php
$conn = @mysqli_connect("localhost", "root", "" ,"videovending");

$title; $cast; $cost; $category; $post; $desc;

$title = $_POST['title'];
$cast  = $_POST['cast'];
$cost  = $_POST['cost'];
$categ  = $_POST['category'];
$category = strtolower($categ);
$post  = date("d/m/y");
$desc  = $_POST['desc'];

$sql = "INSERT INTO movies (title,cast,cost,posted,category,description) VALUES ('$title','$cast','$cost','$post','$category','$desc')";
if(mysqli_query($conn,$sql))
{
    echo '<div class="alert alert-success"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-check-circle"></i>Movie upload successful.</div></div>';
}else
{
echo '<div class="alert alert-danger"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-exclamation-triangle"></i>Something went wrong.Please try again.</div></div>';
      
}


?>
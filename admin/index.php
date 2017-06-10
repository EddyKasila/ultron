<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<?php
require 'config/verify.php';
?>
<html>
<?php
include 'global/header.php'; 
?>
<body>
  <div id="overlay">
    <div class="spinner"></div>
  </div>
  <div id="navbar-dashboard">
  	<div class="navbar-right" id="nav-profile">
  	  <div>
  	  	 <ul class="nav">
  	  	 	<li class="dropdown" >

  	  	 		<a href="#" class="dropdown-toggle" data-toggle="dropdown">
  	  	 			<?php
               if($profileimg == "")
               {
                echo ' <img src="images/administrator.png" height="30px" width="30px" > ';
               }
               else
               {
                echo ' <img src="'.$profileimg.'" height="30px" width="15%" > '; 
               }
              ?>                     <strong><?php echo $username;?></strong> 
                     <b class="caret"></b>
  	  	 		</a>
  	  	 		<ul class="dropdown-menu" id="drop-menu-prof">
  	  	 			<div class="col-md-12" id="menu-controls">
  	  	 				<h4><a href="logout.php"><i class="fa fa-sign-out fa-lg"></i>&nbsp;Sign Out</a></h4>
  	  	 			</div>
  	  	 		</ul>
  	  	 	</li>
  	  	 </ul>
  	  </div>
  	</div>
  	</div>
  </div>
<div id="body">
   <div class="container">
   	  <div class="row">
   	  	 <div class="col-xs-1 col-sm-1 col-md-1" id="navigation">
            <div class="column">
              <div id="navigation-links">
       <ul class="nav">
       <br>
          <li class="position" style="text-align: center;"><img src="images/careerlogo.png"></li>
          <li class="position"><br><p>Tools</p></li>
          <li class="position"><a href="index.php"  title="Dashboard" ><i class="fa fa-dashboard fa-sm active"></i>&nbsp;&nbsp;<i class="link active">Home</i></a></li>
          <li class="position"><a href="users.php" title="Users"><i class="fa fa-users fa-sm"></i>&nbsp;&nbsp;<i class="link">Users</i></a></li>
          <li class="position"><a href="queries.php" title="Questions"><i class="fa fa-tags fa-sm "></i>&nbsp;&nbsp;<i class="link ">Queries & Personality</i></a></li>
          <li class="position"><a href="schools.php" title="Schools"><i class="fa fa-university fa-sm"></i>&nbsp;&nbsp;<i class="link">Schools</i></a></li>
          <li class="position"><a href="careertest.php" title="Schools"><i class="fa fa-test fa-sm"></i>&nbsp;&nbsp;<i class="link">Career Test</i></a></li>
          <li class="position"><br><p>Profile</p></li>
          <li class="position"><a href="profile.php" style=" font-size:10pt;"><i class="fa fa-user fa-sm">&nbsp;&nbsp;</i><i class="link"><?php echo $username;?></i></a></li>
          <li class="position"><a href="messages.php" title="Inbox"><i class="fa fa-envelope fa-sm"></i>&nbsp;&nbsp;<i class="link">Inbox</i></a></li>
          <li class="position"><a href="logout.php" title="Logout"><i class="fa fa-sign-out fa-sm"></i>&nbsp;&nbsp;<i class="link">Logout</i></a></li>

        </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-10 col-sm-10 col-md-10" id="activity-items">
        <div id="title-con">
         <ol class="breadcrumb navbar-right">
          <li class="active"><a href="index.php">Home</a></li>
        </ol>
        <h2>Dashboard</h2>
      </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3" id="data-stats-1">
            <h2>Users</h2>
            <p><?php echo $count;?></p>
            <div style="width: 100%; padding: 1em 1em 1em 1em;  bottom:0; background: rgba(255,255,255,0.5);">
              <a href="users.php">Users</a>
            </div>
          </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-md-offset-1" id="data-stats-2">
            <h2>Career Test</h2>
            <p><?php echo $count3;?></p>
            <div style="width: 100%; padding: 1em 1em 1em 1em;  bottom:0; background: rgba(255,255,255,0.5);">
              <a href="careertest.php">Career Test</a>
            </div>
          </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-md-offset-1" id="data-stats-3">
            <h2>Schools</h2>
            <p><?php echo $count2;?></p>
            <div style="width: 100%; padding: 1em 1em 1em 1em;  bottom:0; background: rgba(255,255,255,0.5);">
              <a href="schools.php">Courses</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-5" id="sendreg">
             <h2>Send Registration Links</h2>
              <p>Register counselors by sending a link to their email.</p>
            <form action="index.php" method="POST" id="sendform">
                <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                  <label>Email</label>
                   <input class="input" type="text" id="email" name="email" placeholder="Email Address" required/>
                 </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 form-group" id="res"></div>
                 <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                   <input class="btn btn-default" type="submit" id="send" name="send" value="Send" />
                 </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-7 col-md-6 col-sm-offset-1 col-md-offset-1" id="counselor_table">
             <h2>List of registered counselors. </h2>
               <div id="notcon"></div>
          </div>
        </div>
      </div>
   	</div>
      </div>
   	  </div>
   </div>

</div>
   
</body>
<script>
   $("#navbar-dashboard").fadeIn('1500');
   $("#navigation").fadeIn();

</script>
</html>

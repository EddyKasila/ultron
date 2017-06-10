$(document).ready(function(){
	$('#movie-btn').click(function(e){
      e.preventDefault();
      
      var title = $('#title').val();
      var category = $('#category').val();
      var cast = $('#cast').val();
      var cost = $('#cost').val();
      var desc = $('#desc').val();
      $("#movie-btn").html('<i class="fa fa-spinner fa-spin"></i>');
       if( title == "" || category == "" || cast == "" || desc == "")
       {
       	$(".result").fadeIn();
       	$(".result").html('<div class="alert alert-danger"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-exclamation-triangle"></i>All fields must be filled</div>');
        $("#close").click(function(){
        $("#movie-btn").html('Add User');
        $(".result").fadeOut();
        });
       }
       else
       {
        $.ajax({
        url: "functions/addmovie.php",
        method:"POST",
        data: {
          title:title,
          cast:cast,
          cost:cost,
          category:category,
          desc:desc
        },
        dataType: "html"
      }).done( function (data){
         $(".result").fadeIn();
        $(".result").html(data);
        $("#close").click(function(){
          
            $(".result").fadeOut();
            location.reload();
        });
      });
         
       }
	});
});
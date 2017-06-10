$(document).ready(function(){
	$('#editmovie').click( function (e){
      e.preventDefault();
      
      var id = $('#id').val();
      var title = $('#title').val();
      var category = $('#category').val();
      var cast = $('#cast').val();
      var cost = $('#cost').val();
      var desc = $('#desc').val();
      $("#editmovie").html('<i class="fa fa-spinner fa-spin"></i>');
       if( title == "" && category == "" && cast == "" && desc == "")
       {
       	$(".result").fadeIn();
       	$(".result").html('<div class="alert alert-danger"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-exclamation-triangle"></i>All fields must be filled</div>');
        $("#close").click(function(){
            $("#editmovie").html('Save Changes');
        	$(".result").fadeOut();
        });
       }
       else
       {
        $.ajax({
        url: "functions/editmovie.php",
        method:"POST",
        data: {
          id:id,
          title:title,
          category:category,
          cast:cast,
          cost:cost,
          desc:desc
        },
        dataType: "html"
      }).done( function (data){
         $(".result").fadeIn();
        $(".result").html(data);
        $("#close").click(function(){
            
            $('#editmovie').html("Save Changes");
            $(".result").fadeOut();
            window.location.href = "movieslist.php";
        });
      });
         
       }
	});
});
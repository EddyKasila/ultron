$(document).ready(function (){
  $('#editbtn').click( function(e){
      e.preventDefault();
      
      var id       = $('#id').val();
      var name     = $('#name').val();
      var location = $('#location').val();
      var user     = $('#user').val();
      var email    = $('#email').val();
      var phone    = $('#phone').val();
      $("#editbtn").html('<i class="fa fa-spinner fa-spin"></i>');
       if( name == "" && location == "" && user == "" &&  email == "" && phone =="" )
       {
        $(".result").fadeIn();
        $(".result").html('<div class="alert alert-danger"><button id="close" class="close" arial-hidden="false">&times</button><i class="fa fa-exclamation-triangle"></i>All fields must be filled</div>');
        $("#close").click(function(){
            $("#edit-user").html('Save Changes');
          $(".result").fadeOut();
        });
       }
       else
       {
        $.ajax({
        url: "functions/editusers.php",
        method:"POST",
        data: {
          id:id,
          name:name,
          location:location,
          user:user,
          email:email,
          phone:phone
        },
        dataType: "html"
      }).done( function (data){
         $(".result").fadeIn();
        $(".result").html(data);
        $("#close").click(function (){
            $('#editbtn').html("Save Changes");
            $(".result").fadeOut();
            location.reload();
        });
      });
         
       }
  });
});
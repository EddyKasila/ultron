$(document).ready(function(){
  $('#del').click(function(e){
      e.preventDefault();
      
      var id = $('#id').val();
      $(".result").fadeIn();
      $(".result").html('<div class="alert alert-warning"><i class="fa fa-exclamation-triangle"></i><h5>Are you sure?</h5><button class="btn btn-default" id="yes" onclick="del()">Yes</button><button onclick="del()" class="btn btn-default" id="no">No</button></div>');
      
  });
});
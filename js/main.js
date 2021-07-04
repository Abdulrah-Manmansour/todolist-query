$(document).ready(function(){
    var inputTask=$(".taskvalue");
    $(".add").on("click",function(){
    if(inputTask.val() !=''){
    $('<li>'+ inputTask.val() +' <button class="delet"><i class="fas fa-trash-alt"></i></button></li>').appendTo('.tasks')
    inputTask.val('');
    }
    });
     $('.tasks').on("click",".delet",function(){
      $(this).parent().fadeOut(1000)
     });
});





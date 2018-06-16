// check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete to do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  //stop bubbling up to the parent elements
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
})

$(".fa-pencil-alt").click(function(){
  $("input[type='text']").fadeToggle(250);
});

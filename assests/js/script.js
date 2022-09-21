$(function () {
    $('header  .fa-bars').click(function(){
        
        $('header .show_sm').animate({
            "position" : "fixed",
            "top" : "0%"
        } , 1000);
      
    })
});
$('header .show_sm .fa-x').click(function(){
    $('header .show_sm').animate({
        "position" : "absolute",
        "top" : "-200%"
    } , 1000);
})
$(document).ready(function(){
    $(".dropdown-btn").click(function(){
        $(this).next(".dropdown-content").slideToggle("fast");
    });
});

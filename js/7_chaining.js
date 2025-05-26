$(document).ready(function(){
    $("button#dog").click(function(){
        $("#p1").css("color", "brown")
        .slideUp(2000).slideDown(2000)
        .css("fontSize", "5rem")
    });
    $("button#cat").click(function(){
        $("#p2").css("color", "orange")
        .slideUp(2000).slideDown(2000)
        .css("fontSize", "5rem")
    });
})
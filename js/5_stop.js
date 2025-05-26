$(document).ready(function(){

    $("#stop1").click(function(){
        $("#panel").stop(2000);
    });

    $("#stop2").click(function(){
        $("#panel").slideUp(2000);
    });

    $("#stop3").click(function(){
        $("#panel").slideDown(2000);
    });

})
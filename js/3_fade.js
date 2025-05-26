$(function(){
    //버튼을 누를 때의 기능은
    /*
    $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    })
    */
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    })
    //한 번에 바꾸려면 원하는 부분 드래그한 뒤 컨+쉬+L 눌러서 수정할 걸로 치면 됨 대신 주석까지 다 바뀜
})
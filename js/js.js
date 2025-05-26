$(function(){
    //문서가 로드되기 전에 실행되는 걸 방지
    $("#hide").click(function(){
        $("p.one").hide(500);
        //.hide() 괄호 안에 숫자 넣으면 숨기는, 보이는 시간 설정 가능. 프리미어.애펙과 달리 웹에서는 0이 하나 더 붙음
    });
    $("#show").click(function(){
        $("p.one").show(500);
    });

    //토글버튼
    $("button.control").click(function(){
        $("mark").toggle();
    })
})
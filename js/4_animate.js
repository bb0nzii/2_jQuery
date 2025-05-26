$(function(){

    $("button.typoB").click(function(){
        let sec = $("section.typo");
        sec.animate({left: '+=100px', width: '+=100px'}, "fast");
        sec.animate({fontSize: '3rem'}, "slow");
    })

    $("button.timeB").click(function(){
        //비동기로 실행될 박스에 대해 변수설정
        var d = $("div.time"); // 변수 div는 time이라는 클래스를 가진 div
        //아래부터가 큐
        d.animate({height: '300px', opacity: '0.25'}, "slow");
        d.animate({width: '300px', opacity: '0.5'}, "slow");
        d.animate({height: '100px', opacity: '0.75'}, "slow");
        d.animate({width: '100px', opacity: '1'}, "slow");
        d.animate({borderRadius:'50%'}, "fast");
    })


    $("button.sh").click(function(){
        $("div.sh").animate({
            height: 'toggle'
        })
    })

    $(".btn-rect").click(function(){
        $("div.rect").animate({
            //+= 연산자 붙이면 버튼을 클릭할 때마다 증가하며 실행됨
            left:'+=100px',
            opacity:'+=0.5',
            height: '+=50px',
            width: '+=50px',
            background: '#035900' //색상값은 따로 플러그인 다운받아야 함
        });
        // rect라는 클래스를 가진 div에 왼쪽으로 250픽셀 이동시키는 애니메이션을 줌
    })
});
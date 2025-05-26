// ---------------------------------- 제이쿼리 ▼

$(function(){
    $("#hideBtn").click(function(){
        $("#hide").hide("slow", function(){
            alert("내가 사라져볼게 얍!");
        });
    });
});



// ------------------------------- 자바스크립트 ▼

function myDisplayer(some){
    document.getElementById("call").innerHTML = some;
}

function myFirst(){
    myDisplayer("BBONZI");
}

function mySecond(){
    myDisplayer("JINHEE");
}
// 함수 안에 함수를 넣음

// 함수는 호출할 때만 실행되는 코드블록
myFirst();
mySecond();
//기존함수 
var plus = function (num1,num2){
    return num1 + num2;

}
console.log(plus(2,3));

//에크마6에서 새로나온 함수선언방법
//화살표함수 arrow function 

let plus1 = (num1, num2) => {
    return num1 + num2;
}
console.log(plus(2,3));

/*
코드 블록 안쪽에 실행되는 코드가 한줄이면 {}를 생략할 수 있습니다. 
또 생략시 자동으로 연산된 값을 반환하기 때문에 return을 작성할 필요가 없습니다. 
만약 매개변수가 한개라면 괄호도 생략가능합니다.(하지만 잘하진 않음)
*/
let plus2 = (num1, num2) => num1 + num2;
console.log(plus(2,3));


//__________________//

// target vs currentTarget

let green = document.querySelector (".green");
green.addEventListener("click", (e) => {
    console.log("currentTarget :", e.currentTarget); // currentTarget : green, Target : green 이라고 찍힘
    console.log("Target :", e.Target); // currentTarget : green, Target : Yellow 이라고 찍힘

})

/*
녹색영역을 클릭하면 두요소 (타겟, 커던트타켓) 모두 녹색 div를 반환합니다
히ㅏ지만 노란색 영역을 클릭하면 타겟은 노란색을, 커런트 타켓은 녹색을 반환합니다. 

커런트타켓은 이벤트 리스너가 달린 요소, 이벤트문에서 이벤트가 연결된 요소를 지칭합니다.
타켓은 실질적인 이벤트가 발생하고있는 요소, 현재 화면상에서 이벤트가 발생한 요소를 지칭합니다. 
*/

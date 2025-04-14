// "use strict";

// alert("test")

// 줄바꿈이 있이다면 세미콜론 생략가능

// 자바스크립트 변수
// 타입 없음
// let,const,var
// let : 변수 선언 , var : let보다 유연한 변수선언방식

let a =3;
console.log(typeof a); //number
console.log(a);
a = "test"; // '' , "" 둘다 문자열로 인식
console.log(typeof a); //number
console.log(a);

// 블록 범위 변수 'a'을(를) 다시 선언할 수 없습니다.
// const : 상수 선언 (변경 불가)
const b = 15;
console.log(b);
// b = 20;
//console.log(b); TypeError: Assignment to constant(상수) variable.

{
    let a = 333;
    console.log("block-scope",a);
}

// 변수 범위
// var : function scope
// let, const : block-scope
function foobar(){
    var foo = 5;
    console.log(foo);
}
// console.log(foo); ReferenceError: foo is not defined

if(true){
    var aa = 5;
    console.log(aa);
}
console.log(aa);

if(true){
    let bb = 5;
    console.log("let block-scope",bb);
}
// console.log("let block-scope",bb); ReferenceError: bb is not defined
















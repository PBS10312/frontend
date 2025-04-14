// 요소  찾기
//  querySelector() : 조건에 맞는 첫번째 요소
let div = document.querySelector("div");
console.log(div);

div = document.querySelector(".container-fluid");
console.log(div);

// querySelectorAll() => NodeList : div 태그 모두 찾기
let divs = document.querySelectorAll("div");
console.log(divs);

divs.forEach((div) => {
  console.log(div);
});

let btn = document.querySelector(".navbar-toggler");
console.log(btn);

//메뉴 찾기
const lis = document.querySelectorAll(".navbar-nav > .nav-item");
lis.forEach((li) => {
  console.log(li);
});

// form 태그 : class
let form = document.querySelector("d.flex");
console.log(form);
// role 속성
from = document.querySelector("[role='search]");
console.log(form);

// form 안 input 요소 찾기
// let input = document.querySelector(".form-control");
input = form.querySelector(".form-control"); // document 안쓰고 찾은 범위내에서 찾을수 있음
// 이름 이용
input = form.search;
console.log(input);
// table 찾기
let table = document.querySelector("table");
table = document.querySelector(".table");
console.log(table);
// table 안 thead 찾기
let thead = document.querySelector("thead");
thead = document.querySelector(".table > thead");
console.log(thead);
thead = table.querySelector("thead");
console.log(thead);

// table 안 tbody 두번째 tr 찾기
let tr = document.querySelector("tbody tr:nth-child(2)");
console.log(tr);

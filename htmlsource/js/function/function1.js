// 함수 == 자바의 메소드와 같다
// 함수 생성
function name(params) {
  // 해야할 일들
}

// 1. 매개변수가 없는 함수
function showMessage() {
  console.log("안녕하세요");
}

// 함수호출
showMessage();

// 2. 매개변수가 있는 함수
function multiply(x, y) {
  console.log(`${x},${y}`);
}
multiply();
multiply(1);
multiply(1, 3);

function multiply2(x, y) {
  return x * y;
}
console.log(multiply2()); // NaN
console.log(multiply2(5, 3)); // 15
console.log(multiply2); // [Function: multiply2]

// 매개변수 기본값
function multiply3(x, y = 3) {
  return x * y;
}
console.log(multiply3(5, 4)); // 20
console.log(multiply3(6)); // 18

function test(a, b, c, d) {
  b = b || 52;
  c = c || 273;

  console.log(`a=${a},b =${b},c=${c},d=${d}`);
}
test(1, 2, 5, 6);
test(3);

function a() {
  function b() {
    console.log("b");
  }
  if (true) {
    function c() {}
  }
  b();
  c();
}
a();

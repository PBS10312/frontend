// 1. 함수 선언 방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트
function add(x, y) {
  return x + y;
}
console.log(add(10, 8));

// 2. 함수 표현식으로 1번 변경
const add2 = function (x, y) {
  return x + y;
};
console.log(add2(10, 8));

// 3. 1에서 10까지 더하는 작업을 함수 표현식으로 작성
const add3 = function () {
  let sum = 0;
  for (let index = 1; index < 11; index++) {
    sum += index;
  }
  return sum;
};
console.log("1 ~ 10의 합 : ", +add3());

// 4. 숫자를 인자로 받아서 3의 배수 찾기
//    3의 배수라면 박수 출력 , 아니라면 통과
const myFunc1 = function (num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
myFunc1(4);
myFunc1(3);
// 5. 4번 개선 ( 3의 배수라면 박수 출력 , 아니라면 통과)
//   9의 배수인 경우 박수 x2 출력

const myFunc2 = function (num) {
  if (num % 3 == 0) {
    if (num % 9 !== 0) {
      console.log("박수");
    } else {
      console.log("박수 x 2");
    }
  } else {
    console.log("통과");
  }
};
myFunc2(3);
myFunc2(6);
myFunc2(9);

// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
//    과목은 2 과목이라 하고 , 두 과목 합해서 120점 이상이면 합격
//    한 과목이 40점 미만이라면 나락으로 불합격

function pass(outline, law) {
  const jumsu = outline + law;

  if (outline >= 40 && law >= 40 && jumsu >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}

pass(40, 80);
pass(30, 90);

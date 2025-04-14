// 배열 생성
const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const others = ["과일", 1, 3.14, new Date(), true, {}];

const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

//  배열 메소드
console.log("배열 길이 ", fruits.length);
console.log("배열 => 문자열 ", fruits.toString());
console.log("배열 요소 조회 ", fruits[2]);
console.log("배열 요소 조회 ", fruits.at(2));
console.log("\n---- 배열 요소 추가");
// push(맨 뒤에 추가) , unshift(앞에 추가) , 인덱스(수정)
fruits.push("메론");
console.log("추가 후 확인 ", fruits.toString());
fruits.unshift("키위");
console.log("추가 후 확인 ", fruits.toString());
fruits[3] = "딸기";
console.log("추가 후 확인 ", fruits.toString());

// splice
array1.splice(2, 0, "킥보드");
console.log("추가 후 확인 ", array1.toString());
planet.splice(6, 1, "명왕성");
console.log("추가 후 확인 ", planet.toString());

// 배열 요소 삭제
// pop(뒤에서 삭제), shift(앞에서 삭제),splice(위치,삭제할개수)
console.log("\n---- 배열 요소 삭제");
console.log("삭제 전 확인 ", fruits.toString());
fruits.pop();
console.log("삭제 후 확인 ", fruits.toString());
fruits.shift();
console.log("삭제 후 확인 ", fruits.toString());

console.log("삭제 전 확인 ", others.toString());
others.splice(2, 2);
console.log("삭제 후 확인 ", others.toString());

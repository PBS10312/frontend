// for (let index = 0; index < array.length; index++) {

// }

// 자바는 -> 모양
// array.forEach(element => {

// });

// for (const key in object) {

// }

// for (const element of object) {
// }

// 1~10까지 출력
for (let index = 1; index < 11; index++) {
  console.log(index);
}

//  1~100 합
let sum = 0;
for (let index = 1; index < 101; index++) {
  sum += index;
}
console.log("1 ~ 100의 합 : ", sum);

let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

sum = 0;
i = 1;
while (i < 101) {
  console.log(i);
  sum += i;
  i++;
}
console.log("while 1 ~ 100 합 : ", sum);

i = 0;
do {
  console.log(i);
  i++;
  ("");
} while (i < 3);

console.log("\n---- for in : 객체 출력");
const myCar = { make: "BMW", model: "X5", year: 2013 };
let txt = "";
for (const key in myCar) {
  txt += myCar[key] + " ";
}
console.log("myCar", txt);

//  `${변수명}` : 변수 + 문자열 출력시
const music = { singer: "아델", time: 15, title: "hello" };
for (const key in music) {
  console.log(`${key} : ${music[key]}`);
}

// break, continue
console.log("\n--- break");
for (let index = 0; index < 101; index++) {
  if (index == 50) break;
  console.log(index);
}

console.log("\n--- continue");
for (let index = 0; index < 40; index += 2) {
  if (index == 0) continue;
  console.log(index);
}

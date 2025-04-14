let numArr = [57, 273, 586, 32, 57, 103, 312, 2];

// 최소값 최대값 출력
let max = numArr[0];
let min = numArr[0];

// for (let i = 0; i < numArr.length; i++) {
//   if (max < numArr[i]) max = numArr[i];
//   if (min > numArr[i]) min = numArr[i];
// }
for (const num of numArr) {
  if (max < num) max = num;
  if (min > num) min = num;
}

console.log(`최대값 : ${max} , 최소값 : ${min}`);

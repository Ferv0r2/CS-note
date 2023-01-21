// p.064
// 자연수로 이루어진 배열에서 최댓값을 찾는 로직

const ret = [1, 2, 3, 4, 5, 11, 12];
let a = 0;
for (let i = 0; i < ret.length; i++) {
  a = Math.max(ret[i], a);
}

console.log(a); // 12

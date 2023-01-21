// p.059
// 자연수로 이루어진 배열에서 최대값을 찾는 로직

const ret = [1, 2, 3, 4, 5, 11, 12];
class List {
  constructor(list) {
    this.list = list;
    this.mx = list.reduce((max, num) => (num > max ? num : max), 0);
  }

  getMax() {
    return this.mx;
  }
}

const a = new List(ret);
console.log(a.getMax()); // 12

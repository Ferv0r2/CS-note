// p.051

const pukuba = (() => {
  const a = 1; // private
  const b = () => 2; // private
  const public = {
    c: 2, // public
    d: () => 3, // public
  };
  return public;
})();
console.log(pukuba);
console.log(pukuba.a);
// { c: 2, d: [Function: d]}
// undefined

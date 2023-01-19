const handler = {
  get: function (target, name) {
    return name === "name" ? `${target.a} ${target.b}` : target[name];
  },
};

const p = new Proxy({ a: "ORBIT", b: "IS CODING MASTER" }, handler);
console.log(p.name);

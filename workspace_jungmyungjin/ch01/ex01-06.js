var myungjin = {
  name: "jung",
  age: 28,
  job: "student",
  married: false,
};

console.log(typeof foo, foo);

var strFoo = JSON.stringify(myungjin);
console.log(typeof strFoo, strFoo);

var objFoo = JSON.parse(strFoo);
console.log(typeof objFoo, objFoo);

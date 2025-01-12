//splice
var x=[120,240,360,480,600,720];
var j=x.splice(0,3,[999,888,777]);
console.log(x);
console.log(j);
var ss=[10,239,23,456,87];
j=ss.splice(4,1,8999);
console.log(ss);
console.log(j);
console.log(ss.length);
console.log(x.length);
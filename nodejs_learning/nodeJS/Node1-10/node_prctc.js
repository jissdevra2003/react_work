var a={
length:10,
breadth:20
}
var b={
...a,
height:120
}
console.log(b);
b.length=100;
console.log(b);
console.log(a);
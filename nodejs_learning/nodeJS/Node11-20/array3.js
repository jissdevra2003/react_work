//class *******Array**********
var k=new Array();
console.log(k);
console.log(k.length);
k[0]=90;
k[8]=1000;
console.log(k);
console.log(k.length);

console.log("*************");
var f=new Array(10,"Jiss",90.787);
console.log(f.length);
console.log(f);

console.log("****************");
//var j=new Array("JIss");  //if single argument passed to the constructor and not a number then it will be treated as element of array 
var j=new Array(10);  //if it is a single argument and it is a number then it will be treated as size of array
console.log(j.length);
console.log(j);

console.log("****************");
var kk=[10,20];
var cc=100;
console.log(Array.isArray(kk));  //kk is a array type object
console.log(Array.isArray(cc));  //cc is not an array type object 

//named function
function sam()
{
console.log("Ways to write functions \n1)named function\n2)named expression function\n3)anonymous function\n4)Lambda expression")
}
sam();

//named expression function
var k=function doSomething(x,y)
{
return x+y;
}
console.log("Total is :",k(8,2));
//
//anonymous function
var m=function(x,y)
{
return x+y;
}
console.log("Total is :",m(19,1));

//lambda expression
var f=(x,y)=>x+y;
console.log("Total is :",f(12,2));
var t=x=>x*x;
console.log("Square is :",t(9));
var l=(x,y)=>x-y;
console.log("Difference is :",l(91,6));
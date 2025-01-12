//concat & splice
var x=[10,20,30,40];
var y=[100,200,5000,344];
var z=x.concat(y);
console.log(x);
console.log(y);
console.log(z)

//concatenate using splice
x.splice(x.length,0,y);
console.log("Concatenation using splice :",x);
console.log(x.length);

//concatenate 1 by 1 using splice
for(var i=0;i<y.length;i++)
{
x.splice(x.length,0,y[i]);
}
console.log("Concatenation using splice 1 by 1 :",x);

console.log(x.length);

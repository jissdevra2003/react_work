//find and findIndex and indexOf functions in arrays
var x=[10,20,333,40,50,60,70,80];
function abcd(n)
{
return n%2!=0;
}
console.log(x);
var y=x.find(abcd);
console.log(y);
var t=x.findIndex(abcd);
console.log(t);
console.log(x.indexOf(60)); 
console.log(x.indexOf(99));  //-1 will be returned kyuki ye element nhi hh array me
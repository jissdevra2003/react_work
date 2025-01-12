function abcd()
{
this.price=200;
}
function sam()
{
}
function add(x,y)
{
console.log(arguments);
console.log(arguments.length);
return x+y;
}
console.log(add(90,10));
var a=new abcd();
console.log(a);
a.price=2000;
console.log(a);
console.log(sam);

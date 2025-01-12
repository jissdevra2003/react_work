function Toy()
{
this.price=2000;
}
function add(x,y)
{
return x+y;
}
var t=new Toy();
console.log("price is :",t.price);
var t2=new Toy();
console.log("price is :",t2.price);
t2.price=10;
console.log(t2.price);
console.log(t);
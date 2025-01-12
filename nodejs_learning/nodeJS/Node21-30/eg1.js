var a=function(p,q)
{
console.log(p,q);
}

a(9,9);

class aaa
{
constructor()
{
this.x=10;
}
}
class bbb extends aaa
{
constructor()
{
super();
this.y=10;
}
}
var tt=new bbb();
console.log(tt);
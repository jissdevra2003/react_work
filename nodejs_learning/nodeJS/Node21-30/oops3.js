//Inheritance
class Rectangle
{
// constructor()
// {
// this.length=0;
// this.breadth=0;
// }
constructor(length,breadth)
{
this.length=length;
this.breadth=breadth;
}
}
//a class can only have one constructor
class Box extends Rectangle
{
// constructor()
// {
// super();
// this.height=0;
// }
constructor(length,breadth,height)
{
super(length,breadth);
this.height=height;
}
}
var cc=new Box();
console.log(cc);
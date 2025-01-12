//concept of mixins

//create a function which will return reference of a 
//anonymous class which will inherit the class 
//whose reference is passed as parameter to the function 
class aaa
{
constructor()
{
this.x=100;
}
};
function someFunction(someClass)
{
return class extends someClass  //dynamic 
{
constructor()
{
super()
this.y=120;
}
};
}
class ccc extends someFunction(aaa)  //now ccc
{
constructor()
{
super();
this.z=900;
}
}

var bbb=someFunction(Object);
var b=new bbb();
console.log(b);
var c=new ccc();
console.log(c);

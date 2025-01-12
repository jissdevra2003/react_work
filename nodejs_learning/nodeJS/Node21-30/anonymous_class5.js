class aaa
{
constructor()
{
this.y=1200;
}
}
const bbb=function(someClass)
{
return class extends someClass
{
constructor()
{
super();
this.o=1000;
}
}
}

function ccc(someClass)
{
return class extends someClass
{
constructor()
{
super();
this.kk=123;
}
}
}



class ddd extends ccc(bbb(Object))
{
constructor()
{
super();
this.jj=190;
}

}
var d=new ddd();
console.log(d);
function Movie()
{
this.movie="";
this.year=0;
this.manual=function()
{
console.log("Something about ",this.movie," released in year",this.year);
}
}
var m1=new Movie();
m1.movie="Breaking bad";
m1.year=2008;
m1.manual();
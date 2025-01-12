class city
{
static name="Chicago";
constructor()
{
this.y=190;
}
static sam()
{
console.log(this.y);  //static cannot access non-static 
console.log(this.name);  //static can only access static
console.log(city.name);
}

}
let cc=new city();
console.log(city.name);
console.log(cc.y); 
city.sam()
console.log(cc);
console.log(city);
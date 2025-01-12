function myCollection()
{
const collection=[];
this.add=function(num)
{
collection.push(num);
}
this.iterate=function*()
{
var index=0;
while(index<collection.length)
{
yield collection[index];
index++;
}
}
}
var m=new myCollection();
m.add(10);
m.add(20);
m.add(30);
var tt=m.iterate();
for(var y of tt)
{
console.log(y);
}
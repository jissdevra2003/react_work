function add(x,y,z)
{
console.log(arguments);
var i;
var total=0;
for(i=0;i<arguments.length;i++)
{
console.log(arguments[i]);
total+=arguments[i];
}
return total;
}
console.log("Total is :",add(10,100,19));

function addTwoNumbers(x,y)
{
if(typeof(x) !== 'number' || typeof(y)!=='number') 
{
console.log("pass arguments of number type");
return null;
}
 else return x+y;
}
console.log(addTwoNumbers(9,"10"));
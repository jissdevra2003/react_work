var x=10;   //global level
function sam()
{
var x=19;  //function level
var y=15;
if(y==15)
{
let x=70;  //let keyword block level as of now if block
console.log(x);
}
console.log(x);   //function level
}
sam();
console.log(x);  //global level
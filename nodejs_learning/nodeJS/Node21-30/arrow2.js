//named expression function
const k=function()
{
console.log(this);
}
k();
console.log("00000000000000000000000000")
//arrow function
const jj=()=>
{
console.log(this)
}
jj();

//named function
function jjj()
{
console.log(this);
}
console.log("1111111111111111111111111111111111111111111")
jjj();
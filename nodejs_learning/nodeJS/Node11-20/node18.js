function sam()
{
console.log("gus");
}
function tom(k)
{
k();
}
tom(sam);  //called one function and passed address of another function.
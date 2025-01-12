function add(x,y,z)
{
return x+y+z;
}
function whatever(f)
{
return function(p,q)
{
return f(p,q,0);
}
}
var a=whatever(add);
console.log(a(10,90));
var a=[10,10,10];
console.log(add(...a));

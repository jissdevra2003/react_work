//filter function in arrays (important)
var x=[10,20,30,40,50,60,70,80,90,100]
function func(n)
{
return n>30;
}
var y=x.filter(func);  //hmara function jis element k liye true return krega 
//srf whi element filter array m rkhega
console.log(x);
console.log(y);
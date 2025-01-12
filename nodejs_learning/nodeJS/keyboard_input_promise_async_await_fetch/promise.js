function divide(dividend,divisor)
{
var prom=new Promise(function(doneNotifier,errorNotifier)
{
setTimeout(function()
{
if(divisor==0)
{
errorNotifier(`Cannot divide by zero`);
}
else 
{
doneNotifier([Math.floor(dividend/divisor),dividend%divisor]);
}
},5000)
})
return prom;
}
var a=1003;
var b=20;
var promise=divide(a,b);
promise.then(function([quotient,remainder])
{
console.log(`After dividing quotient is ${quotient} and remainder is ${remainder}`);
}).catch(function(error)
{
console.log(`Error : ${error}`);
});
let tm;
document.querySelector('#start').addEventListener('click',function(e)
{
let x=0;
tm=setInterval(function()
{
x++;
console.log(`Number is ${x}`);
},3000)

})
document.querySelector('#stop').addEventListener('click',function()
{
clearInterval(tm);
console.log('stopped');

})
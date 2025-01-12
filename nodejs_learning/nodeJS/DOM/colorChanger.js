const randomColor=function()
{
const hex='0123456789ABCDEF';
let color='#'
for(let i=0;i<6;i++)
{
color+=hex[Math.floor(Math.random()*16)];
}
return color;
}
let tm;
document.querySelector('#start').addEventListener('click',function()
{
if(tm==null)
{
tm=setInterval(function(e)
{
document.body.style.backgroundColor=randomColor();
},2000)
}
});
document.querySelector('#stop').addEventListener('click',function()
{
clearInterval(tm);
tm=null;
});
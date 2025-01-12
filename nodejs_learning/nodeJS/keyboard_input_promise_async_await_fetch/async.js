var promise1=new Promise(function(resolve,reject)
{
setTimeout(function()
{
let error=false;
if(!error)
{
console.log('Success')
resolve({username:`Jiss`,psswrd:`123`});
}
else 
{
reject(`Unsuccessful`);
}
},1000);
})

async function main()
{
try
{
var result=await promise1;
console.log(result);
}catch(error)
{
console.log(error);
}
}
main();
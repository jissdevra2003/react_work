var promise1=new Promise(function(resolve,reject)
{
setTimeout(function()
{
let error=false;
if(!error)
{
console.log(`Watching tmkoc`)
resolve({username:'Jiss',year:'3rd'});
}
else 
{
reject('Solving error');
}
},1000)
});

promise1
.then(function(data)
{
console.log(data);
let name=data.username;
return name;
})
.then(
function(name)
{
console.log(name);
}
)
.catch(function(error)
{
console.log(error);
});
//fetch returns a promise 
async function getAllUsers()
{
try{
//fetch returns a promise
const res=await fetch(`https://api.sampleapis.com/wines/reds`)

 const data=await res.json();
 console.log(data);
}catch(error)
{
console.log(error)
}
}
getAllUsers();
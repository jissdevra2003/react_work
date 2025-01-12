//another way to write fetch

function getAllUsers()
{
fetch(`https://api.sampleapis.com/wines/reds`)
//ye then jo return krga wo niche wale then ko milega

.then((res)=> res.json())   //returns res.json
.then((data)=>{             //res.json received in data
console.log(data);
})
.catch((error)=>{
console.log(error)
})
}
getAllUsers();
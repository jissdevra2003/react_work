const arr=[{
name:'Ronaldo',
age:39
},
{
name:'Messi',
age:31
},
{
name:'Neymar',
age:30
}];

//forOf loop
for(const value of arr)
{
console.log(value);
}
console.log('**************************');
//forEach loop
arr.forEach((item)=>{
console.log(`Name is ${item.name}`);
console.log(`Age is ${item.age}`);
});

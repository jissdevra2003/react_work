const mySym=Symbol();

const obj={
name:"Jiss",
[mySym]:190,
sport:"Football",
age:20,
city:"Ujjain",
user2:{
age:23,
team:"Barcelona"
}
}

console.log(obj);
console.log(obj.city);
console.log(obj[mySym]);
console.log(obj.user2["team"]);

const obj2={
"email id":"jiss@ujjain.com",
"city":"Ujjain"
}
console.log(obj2["email id"]);

obj2.user=function()
{
console.log(`hello ${this.city}`);
}

obj2.user();

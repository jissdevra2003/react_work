const obj1={
email:"jiss@fgl.com",
number:"7877878787"
}
const obj2=
{
sport:"football",
age:20
}
const obj3={...obj1,...obj2};
console.log(obj3)

const pesUser=new Object()
pesUser.id="Konami8900";
pesUser.name="Jiss";
pesUser.league=3;
pesUser.isLoggedIn=false;
console.log(pesUser)

const objKeys=Object.keys(pesUser);
//console.log(objKeys)
for(i=0;i<objKeys.length;i++) console.log(`Key ${i} ${objKeys[i]}`)

const objValues=Object.values(pesUser)
console.log(objValues);

//array of objects

const arrObj=[{id:122,email:"jiss@fb.com"},{id:123,email:"pes.com"},{id:124,email:"hight.com"}]
console.log(arrObj);
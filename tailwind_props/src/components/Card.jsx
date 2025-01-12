import * as React from 'react'

//child component
//function Card(props)  

//de-structured props
function Card({Obj,arr,country})
{
console.log(Obj);
console.log(arr);
console.log(country);
// console.log(props);
// console.log(props.username);
// console.log(props.myArr[0]);
// console.log(props.Obj);
return (
<>
<h1>Player name : {country}</h1>
</>
);

}
export default Card;
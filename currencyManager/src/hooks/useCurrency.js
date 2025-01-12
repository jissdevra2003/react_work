import {useState, useEffect} from 'react';
function useCurrency(currency)
{
const [data,setData]=useState({});   //UI pe update krske isly
useEffect(
function()
{
 //currency jb bhi change hogi tb ye function call hoga
let url=`https://open.er-api.com/v6/latest/${currency}`;

fetch(url)
.then((res)=> res.json())    //converted response to json and returned json to the next then
.then((res)=>
{ 
const rates=res.rates;

setData(rates)  //res.rates 
console.log(data);
})
.catch((error)=>{
console.log(`Error fetching the rates : ${error}`);
})
}
,[currency])   //currency jb bhi change ho, tb ye method call hona chahiye
                //so it is a dependency
return data;  //data=res.rates

}
export default useCurrency;

// const obj={
// "username":"JIss",
// "teamName":"India",
// "city":"Ujjain"
// }
// console.log(obj["city"]);

// let k="city";
// const obj={
// username:"JIss",
// teamName:"India",
// k:"Ujjain"
// }
// console.log(obj["k"]);
// console.log(obj.username);
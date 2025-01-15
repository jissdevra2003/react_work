import * as React from 'react';
import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github()
{
const data=useLoaderData();
// const [data,setData]=useState({})
// useEffect(()=>{
// fetch("https://api.github.com/users/jissdevra2003")
// .then((res) => res.json())
// .then(data =>{
// console.log(data);
// setData(data);
// })
// },[])
return (
<div  className='flex flex-wrap justify-center items-center bg-green-400 text-yellow-50 text-3xl'>
Information : {data["id"]}</div>
)
}
export default Github;

export const githubInfoLoader=async () => {
const response=await fetch("https://api.github.com/users/jissdevra2003")
return await response.json();   //promise hi return krdiya

}
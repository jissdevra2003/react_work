import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import React from 'react';

//parent component
function App() {
const myObj={
playerName:"Messi",
teamName:"Argentina"
}
const myArr=['ronaldo','neymar',2,3,4,5];
const countryName="Brazil";
return(
<>
<Card Obj={myObj} arr={myArr} country={countryName} />
</>
);
}

export default App;

import { useState } from 'react'
import {InputField} from './components'
import useCurrency from './hooks/useCurrency'


function App()
{
const [amount,setAmount]=useState(1);
const [fromValue,setFromValue]=useState("USD");
const [toValue,setToValue]=useState("INR");
const [convertedAmount,setConvertedAmount]=useState("");

const currency=useCurrency(fromValue);

const options=Object.keys(currency);

const swapValues=function()
{
setFromValue(toValue);
setToValue(fromValue);
setConvertedAmount(amount);
setAmount(convertedAmount);
}

const convertAmount=function()
{
setConvertedAmount(amount*currency[toValue]);
}

return (
<>
<div className="w-full h-screen bg-cover justify-center flex flex-wrap" style={{backgroundImage:`url('./images/bg_image.jpg')`}}>
<div className="w-full">
<div className="w-full max-w-md mx-auto">
<form
onSubmit={(e)=>{
e.preventDefault();
convertAmount();
}}
>
<div className="w-full mb-1">
<InputField 
label="From"
amount={amount}               //*********props**************

onCurrencyChange={(currency)=>{
setAmount(amount)
}}
selectCurrency={fromValue}
currencyOption={options}
onAmountChange={(amount)=>{
setAmount(amount)
}}
/>
</div>
<div className="relative w-full h-0.5">
<button 
type="button"
className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800
mx-40
"
onClick={(e)=>{
swapValues();
}}
>
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Swap
</span>
</button>
</div>
<div className="w-full mt-1 mb-4">
<InputField  
label="To"
amount={convertedAmount}
currencyOption={options}
onCurrencyChange={(currency)=>{
setToValue(currency)
}}
selectCurrency={toValue}
amountDisable={true}
/>
</div>
<button 
type="submit"
className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Convert {fromValue} to {toValue}
</span>
</button>
</form>
</div>
</div>

</div>

</>

);



}
export default App;
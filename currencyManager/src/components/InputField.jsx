import * as React from 'react';
function InputField({
label,
amount,
onAmountChange,
onCurrencyChange,
currencyOption=[],
selectCurrency="USD",
amountDisable=false,
currencyDisable=false,
})   //object de-structured
{

return (
<>
<div className="bg-white p-3 rounded-md text-sm flex m-10">
<div className="w-1/2">
<lable className="inline-block text-teal-300">
{label}
</lable>          
<input
className="outline-none w-full bg-transparent py-1"
type="number"
placeholder='Amount'
value={amount}
disabled={amountDisable}  
//event handler
onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}

/>
</div>
<div className="w-1/2 flex flex-wrap justify-end text-right">
<p className="text-black mb-2w-full" >Currency type</p>

 {/* to create a drop-down list */}
<select className="rounded-lg px-1 py-1 bg-white cursor-pointer border-2"
value={selectCurrency}
onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} 
disabled={currencyDisable}
>   
{currencyOption.map((currencyValue)=>
{
return (
<option key={currencyValue}    //always pass a unique property as key in loops
value={currencyValue}>
{currencyValue}
</option>
)
})}                            

</select>

</div>

</div>

</>

)

}
export default InputField;
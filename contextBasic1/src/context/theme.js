import {createContext,useContext} from 'react'


//STEP 1******************************************
//Create Context
export const ThemeContext=createContext({
//passing the values here jo child components access krskte hh
themeMode:"light",
darkTheme:()=>{},
lightTheme:()=>{}
})


//STEP 2*******************************************
//Create context provider
export const ThemeProvide=ThemeContext.Provider


//STEP 3********************************************
//fetch data from context using useContext
export default function useTheme()
{
return useContext(ThemeContext);
}
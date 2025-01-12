import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'


const user="Ronaldo";
const reactElement=React.createElement(
'a',     //type of tag
{        // props
'href':'https://google.com',
'target':'_blank'
},
'click here to visit google',    //children(innerHTML)
user      , {/* variables value in the last */}   
 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
 reactElement
  
)

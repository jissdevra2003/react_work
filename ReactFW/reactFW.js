function customRender(element,container)
{
// const domElement=document.createElement(element.type)
// domElement.innerHTML=element.children;
// domElement.setAttribute('href',element.props.href);
// domElement.setAttribute('target',element.props.target);

const domElement=document.createElement(element.type);
domElement.innerHTML=element.children;
/////////simple for loop///////////////////////
// const keys=Object.keys(element.props);
// for(let i=0;i<keys.length;i++)
// {
// const key=keys[i];
// domElement.setAttribute(key,element.props[key]);
// }

//******************forin loop*********************
for(let prop in element.props)
{
if(prop==='children') continue;
domElement.setAttribute(prop,element.props[prop]);
}

container.appendChild(domElement);

}

const root=document.querySelector('#root')


const element=
{
type:'a',
props:{
href:'https://google.com',
target:'_blank'
},
children:'Click here'
};



customRender(element,root);
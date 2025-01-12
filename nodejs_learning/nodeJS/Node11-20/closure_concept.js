//closure concept
function printReport(x,y)
{
console.log("Some report about ",x,y);
}


function addHeader(func,header)
{
console.log("add header got called ",header);
function proxy(p,q)   //closure 
{
console.log(header);  //outer function variable accessed by inner function
func(p,q);
}
return proxy;
}

kk=addHeader(printReport,"Ujjain sports commission");
jj=addHeader(printReport,"Indore sports commission");
kk(900,200);

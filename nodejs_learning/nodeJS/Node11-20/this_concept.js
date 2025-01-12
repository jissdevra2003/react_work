function ReportGenerator()
{
this.title="Sports commision report"; // object level property
this.getReporter=function()   //function at object level
{
console.log(this.title);
//solution 
var jj=this;  //ab jj bhi us ReportGenerator k object ko point krega 
return function()  //anonymous function address will be returned
{
console.log(jj.title);  //jj k through title ko access kiya.
console.log("Some data")
}

}
}


var rg=new ReportGenerator();
var reporter=rg.getReporter();
reporter();
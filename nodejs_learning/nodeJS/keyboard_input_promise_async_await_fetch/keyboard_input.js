//taking input from keyboard using async await
var readline=require('readline');
var ioInterface=readline.createInterface(
{
"input":process.stdin,
"output":process.stdout
}
);

function getInput(question)
{
var promise=new Promise(function(resolve,reject)
{
ioInterface.question(question,function(answer)
{
resolve(answer);
})
});
return promise;
}
async function main()
{
var name=await getInput("Enter name :");
var panNumber=await getInput(`Enter PAN Number :`);
var city=await getInput(`Enter city name :`);
var gender=await getInput(`Enter gender :`);
if(gender.length!=1)
{
ioInterface.close();
console.group(`Invalid gender`);
return;
}
console.log(`Name is ${name}`);
console.log(`PAN number :${panNumber}`);
console.log(`City :${city}`);


ioInterface.close();
}
main();
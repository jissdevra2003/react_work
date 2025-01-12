var readline=require('readline');
var ioInterface=readline.createInterface(
{
"input":process.stdin,
"output":process.stdout
}
);

function getInput(q)
{
var promise=new Promise(function(resolve,reject)
{
ioInterface.question(q,function(answer)
{
const array=answer.split(' ').map(Number);
resolve(array);
});
});
return promise;
}


async function main()
{
var arr=await getInput("Enter numbers :");
console.log(arr);
ioInterface.close();
}
main();
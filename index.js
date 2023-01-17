// Code your solutions in this file
/*let newA = [];
function writeCards(namesP,eventP)
{
for(let i=0;i<namesP.length;i++)
    {
        newA.push(`Thank you, ${namesP[i]}, for the wonderful ${eventP} gift!`);
    }
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(newA)   */


let newA = [];
function writeCards(namesP,eventP)
{
   
for(let i=0; i<namesP.length;  i++)
    {
       
        newA.push(`Thank you, ${namesP[i]}, for the wonderful ${eventP} gift!`);
    }
    return newA
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(newA)






let originalInt = 10;
function countDown(intgerP)
{ 
    
    while(intgerP >= 0)
    {
        console.log(intgerP);
        intgerP--;
    }

}
countDown(originalInt);
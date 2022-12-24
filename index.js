/*// test iterations
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bowl !`);
     
    }
    return gifts;
}
wrapGifts(gifts);

const arryNames =["Charlie", "Samip", "Ali"];
const newArry = [];
function writeCards(stringName, eventName) {
 for (let i=0;i < arryNames.length; i++){
   newArry.push( `Thank you, ${arryNames[i]}, for the wonderful ${eventName} gift!`);
     }
    return newArry;
 
}
writeCards(arryNames, "birthday") 
console.log(newArry);
/// end test iteration
*/

/*
const arryNames =["Guadalupe", "Ollie", "Aki"];
const newArry = [];
function writeCards(stringName, eventName) {
 for (let i=0;i < arryNames.length; i++){
   newArry.push( `Thank you, ${arryNames[i]}, for the wonderful ${eventName} gift!`);
     }
    return newArry;
 
}
writeCards(arryNames, "surprise") 
console.log(newArry);
*/
const newArry = [];

function writeCards(stringName, eventName) {
 for (let i=0;i < 3; i++){
   newArry.push( `Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
     }
    return newArry;
 
}
writeCards(stringName, "surprise") 
console.log(newArry);
// counter
function countDown(counter) {

while (counter >= 0){
  console.log(counter--);
}


}
countDown(counter);

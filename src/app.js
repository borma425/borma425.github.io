

var currentScore = 1 ,
badScore = 1;


// https://stackoverflow.com/a/17891411/14592575
function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}


function GenerateNewCads(currentElement){

var chooser = randomNoRepeats(MergeLevels);

var newWord = chooser();

currentElement.dataset.keyWords = newWord;

currentElement.textContent = newWord;

CurrentList.push(newWord);

}







const [level_one, level_two, level_three, level_four, level_five] =
[

[false,"linux","hello","language","tools","water"],
["five","six","Then","space","lampp"],
["Nine","Ten","Eleven","Twelve","ten"],
["faster","programming","Fifteen","Sixteen","server"],
["hacker","pentest","hardware","esp32","amazon"],

];



var MergeLevels = [...level_two, ...level_three,  ...level_four,  ...level_five];

var CurrentList =  level_one;


var box = document.querySelectorAll('#parent > .message');


function myInputKeys(myKeys) {

var Fully_Word = myKeys;

items_list = CurrentList.slice(1).slice(-5);


if( items_list.includes(Fully_Word) ){

setTimeout(function(){

currentScore++


//feature
if(currentScore > 100){

alert("Wow Man You are Very Fast!");

}
//end




document.getElementById('score').textContent = currentScore;

document.getElementById('primaryInput').value = "";
}, 200);


document.querySelectorAll(`div[data-key-words="${Fully_Word}"]`).forEach( element => GenerateNewCads(element));

}


};









box.forEach((spanElement,idx, array) => {

spanElement.addEventListener('animationiteration', (event) => {

event.preventDefault();

GenerateNewCads(event.currentTarget);


badScore++

document.getElementById('badscore').textContent = badScore;



});

});
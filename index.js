
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//sets the first letter each word to uppercase to uppercase for titles
function titleCased(){

const newArray = tutorials.map(currentTitle => { 
  return currentTitle.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  
})

return newArray
}
 



  


console.log(titleCased())
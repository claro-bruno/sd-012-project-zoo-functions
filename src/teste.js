const data = require('./data');  


let entrants = { 'Child': 3, 'Senior': 1 };
const {Adult = 0, Child, Senior} = entrants
const mult = entrants.Adult * data.prices.Adult
const x = entrants.Child


function calculateEntry(paramter = 0) {
  if(Object.keys(paramter).length === 0){
    return 0
  }
   const {Adult = 0, Child = 0, Senior = 0} = paramter 

  const sum = Adult * data.prices.Adult
   + Child* data.prices.Child + Senior * data.prices.Senior;
  return sum;
}

console.log(calculateEntry(entrants));
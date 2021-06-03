function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  
  // const precos = Object.values(prices);
  // const visits = Object.values(entrants);
  // console.log(precos);
  // console.log(visits);
  // return (precos[0] * visits[0]) + (precos[1] * visits[1]) + (precos[2] * visits[2]);
 const {Adult = 0, Senior = 0, Child = 0} = entrants
 const {Adult: adultPrice, Senior: seniorPrice, Child: childPrice} = prices
 return (Adult * adultPrice) + (Senior * seniorPrice) + (Child * childPrice);
}
console.log(calculateEntry({ 'Adult': 2, 'Senior': 3, 'Child': 1 }));
const data = require('./data');

const ids = data.species.map((id) => id.id).filter((id) => id.species.id)

console.log(ids)




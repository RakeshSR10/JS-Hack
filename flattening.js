let entries = [1, [2,3], [6,7], 9];

console.log('org arr', entries);

let flat_entries = [].concat(...entries);

console.log(flat_entries);
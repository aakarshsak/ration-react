const csv = require('csv-parser');
const fs = require('fs-extra');

const NAME = 'Name';
let list = [];
const getStatesList = () => {
  let x = 0; 
  let l = [];
  fs.createReadStream('states-list.csv')
  .pipe(csv())
  .on('data', (row) => {
    l.push(row[NAME]);
    x+=1;
  })
  .on('end', () => {
    console.log('Successfully loaded states...');
    list = l;
  });
}

getStatesList();
//console.log('nd', getStatesList());

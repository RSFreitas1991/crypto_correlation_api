import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const csvFilePath = path.join(__dirname, '../data/eth.csv');

fs.createReadStream(csvFilePath)
  .pipe(csv({ separator: ';' }))
  .on('data', (row: string) => {
    const keys = [
      'timeOpen',
      'timeClose',
      'timeHigh',
      'timeLow',
      'name',
      'open',
      'high',
      'low',
      'close',
      'volume',
      'marketCap',
      'timestamp',
    ];
    const values = Object.values(row)[0]
      .split('";"')
      .map((value) => value.replace(/(^"|"$)/g, ''));
    const parsedRow = keys.reduce((obj, key, index) => {
      obj[key] = values[index];
      return obj;
    }, {});
    console.log(parsedRow);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

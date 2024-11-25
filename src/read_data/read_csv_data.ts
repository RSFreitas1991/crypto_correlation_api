import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import csv from 'csv-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvFilePath = path.join(__dirname, '../data/eth.csv');

const results = [];

fs.createReadStream(csvFilePath)
  .pipe(csv({separator: ';'}))
  .on('data', (row) => {
    const obj = {
      date: new Date(row.timestamp),
      price: row.close
    }
    results.push(obj);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    console.log(results);
  });
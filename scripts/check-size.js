import { stat } from 'fs/promises';
import prettyBytes from 'pretty-bytes';
import { resolve } from 'path';

const files = [
  { name: 'customers_100000.csv', label: 'Full dataset', duckDb: 288626n },
  { name: 'customers_100000_slim.csv', label: 'Slim dataset', duckDb: 283628n },
];

for (const file of files) {
  const stats = await stat(resolve('data', file.name));
  const fileSizeBytes = stats.size;
  console.log(`${file.label}: ${prettyBytes(fileSizeBytes)}`);
  console.log(
    `${file.label} (from DuckDB): ${prettyBytes(Number(file.duckDb) * 60)}`
  );
}

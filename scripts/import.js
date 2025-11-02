import { DuckDBInstance, DuckDBPendingResultState } from '@duckdb/node-api';

const tableName = 'customers';
const instance = await DuckDBInstance.fromCache('./database.duckdb');

// Create two connections - one for import, one for monitoring
const con = await instance.connect();

await con.run(`SET enable_progress_bar = true`);

await con.run(`DROP TABLE IF EXISTS ${tableName}`);

const prepared = await con.prepare(
  `CREATE TABLE ${tableName} AS SELECT * FROM read_csv_auto('./data/customers_100000_slim.csv')`
);
const pendingResult = await prepared.start();

while (pendingResult.runTask() !== DuckDBPendingResultState.RESULT_READY) {
  console.log('progress', con.progress);
  await new Promise(resolve => setTimeout(resolve, 10));
}

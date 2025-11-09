import { DuckDBInstance } from '@duckdb/node-api';

const instance = await DuckDBInstance.fromCache('./database.duckdb');

// Create two connections - one for import, one for monitoring
const con = await instance.connect();

const reader = await con.runAndReadAll(`SELECT version();`);

console.log(await reader.getRowObjectsJson());

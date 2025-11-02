DuckDB Import
===

## Install

```sh
pnpm i
```

## Run

```sh
pnpm start
```

## Expected behavior

The log should report the correct number of rows, which is 100,000

## Actual behavior

It logs `288268` as the total number of rows

```js
{ percentage: 0, rows_processed: 0n, total_rows_to_process: 288628n }
{
  percentage: 26.579830264777126,
  rows_processed: 76716n,
  total_rows_to_process: 288628n
}
{
  percentage: 59.38225973278448,
  rows_processed: 171393n,
  total_rows_to_process: 288628n
}
{
  percentage: 92.16259619640381,
  rows_processed: 266007n,
  total_rows_to_process: 288628n
}
{
  percentage: 99.99930706653547,
  rows_processed: 288626n,
  total_rows_to_process: 288628n
}
{
  percentage: 99.99930706653547,
  rows_processed: 288626n,
  total_rows_to_process: 288628n
}
```

If you switch it to importing the `customers_100000_slim.csv` which has slightly less data, you get a different number

```
{ percentage: 0, rows_processed: 0n, total_rows_to_process: 283628n }
{
  percentage: 21.97371101680997,
  rows_processed: 62323n,
  total_rows_to_process: 283628n
}
{
  percentage: 48.238472192600014,
  rows_processed: 136817n,
  total_rows_to_process: 283628n
}
{
  percentage: 75.35031028518631,
  rows_processed: 213714n,
  total_rows_to_process: 283628n
}
{
  percentage: 96.18581219394662,
  rows_processed: 272809n,
  total_rows_to_process: 283628n
}
{
  percentage: 99.99929485100202,
  rows_processed: 283626n,
  total_rows_to_process: 283628n
}
{
  percentage: 99.99929485100202,
  rows_processed: 283626n,
  total_rows_to_process: 283628n
}
{
  percentage: 99.99929485100202,
  rows_processed: 283626n,
  total_rows_to_process: 283628n
}
```

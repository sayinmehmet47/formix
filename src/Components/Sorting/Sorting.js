import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

const namor = require('namor');

const container = [];
for (let i = 0; i < 25; i++) {
  const name = namor.generate({ words: 1, saltLength: 0 });
  const age = Math.floor(Math.random() * 30);
  container.push({ sequence: i, name: name, age: age });
}

export const Sorting = () => {
  const data = useMemo(() => [...container], []);

  const columns = useMemo(
    () => [
      {
        Header: 'Sequence',
        accessor: 'sequence', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    nextPage,
    previousPage,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
  } = useTable({ columns, data }, useSortBy, usePagination);
  return (
    <>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '20px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          NextPage
        </button>
      </div>
    </>
  );
};

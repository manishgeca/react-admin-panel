import React from 'react';
import { useTable } from 'react-table';

const Table = () => {
  const data = React.useMemo(() => [
    { col1: 'Hello', col2: 'World' },
    { col1: 'react-table', col2: 'rocks' },
    { col1: 'whatever', col2: 'you want' },
  ], []);

  const columns = React.useMemo(() => [
    {
      Header: 'Column 1',
      accessor: 'col1', // accessor is the "key" in the data
    },
    {
      Header: 'Column 2',
      accessor: 'col2',
    },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} style={{ borderBottom: 'solid 3px red' }}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ padding: '10px', background: 'aliceblue' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ borderBottom: 'solid 1px gray' }}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} style={{ padding: '10px', background: 'papayawhip' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

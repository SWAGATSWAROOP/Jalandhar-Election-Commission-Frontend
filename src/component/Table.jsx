// src/PartTable.js

import React from 'react';
import { useTable } from 'react-table';

const Table = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Part Number',
        accessor: 'partNumber', // accessor is the "key" in the data
      },
      {
        Header: 'Assembly/Constituency',
        accessor: 'assembly',
      },
      {
        Header: 'Location Rush',
        accessor: 'locationRush',
        Cell: ({ value }) => (
          <span
            style={{
              color: value === 'Yes' ? 'red' : value === 'No' ? 'green' : 'black',
              fontWeight: 'bold',
            }}
          >
            {value}
          </span>
        ),
      },
      {
        Header: 'Last Updated Time',
        accessor: 'lastUpdatedTime',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
    ],
    []
  );

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
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
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
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'papayawhip',
                  }}
                >
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

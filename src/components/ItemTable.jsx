import React from "react";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { useTable, useSortBy } from "react-table";
import { connect } from "react-redux";

// import makeData from "./makeData";

function ItemTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Item",
        accessor: "name",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "",
        accessor: "delete",
      },
    ],
    []
  );

  const data = [
    {
      name: "Carrot",
      category: "Vegetable",
      price: "$1.00",
    },
    {
      name: "Chicken",
      category: "Meat",
      price: "$10.00",
    },
    {
      name: "Raspberry",
      category: "Fruit",
      price: "$5.00",
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  // // We don't want to render all 2000 rows for this example, so cap
  // // it at 20 for this use case
  // const firstPageRows = rows.slice(0, 20);

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          {
            /* console.log(i); */
          }
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {index === data.length ? (
                      <Button variant="contained" color="secondary">
                        Delete
                      </Button>
                    ) : (
                      cell.render("Cell")
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
}
// const mapStateToProps = state => {
//   console.log("state", state.item);
//   return { item: state.item };
// };

export default connect()(ItemTable);

// const data = React.useMemo(() => makeData(2000), []);

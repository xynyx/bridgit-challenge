import React, { useMemo, useEffect } from "react";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { useTable, useSortBy } from "react-table";
import { connect } from "react-redux";

// import makeData from "./makeData";

function ItemTable({ items }) {
  console.log("item", items);
  const columns = useMemo(
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

  const data = useMemo(() => {
    return items;
  }, [items]);

  // useEffect(() => {}, [items]);

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
        {rows.map(row => {
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
const mapStateToProps = state => {
  console.log("state", state.item);
  return { items: state.item };
};

export default connect(mapStateToProps)(ItemTable);

// const data = React.useMemo(() => makeData(2000), []);

import React, { useMemo } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { useTable, useSortBy } from "react-table";
import { deleteItemFromList } from "../redux/actions";

function ItemTable({ items, deleteItemFromList, filters }) {
  const StyledTableHeader = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: "1.3em",
    },
  }))(TableCell);

  // Filter items based on category filters
  // If no filters and this is called, just return all the items
  const itemsAfterFilter = () => {
    if (filters.length === 0) return items;

    return items.filter(item => filters.includes(item.category));
  };

  // Watch for changes in items and filters and update list accordingly
  const data = useMemo(() => {
    return itemsAfterFilter();
  }, [items, filters]);

  // Set columns for table
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

  // React Table set-up
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const handleItemDelete = row => {
    deleteItemFromList(row.id);
  };

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => {
              return index === columns.length - 1 ? (
                <StyledTableHeader {...column.getHeaderProps()}>
                  {column.render("Header")}
                </StyledTableHeader>
              ) : (
                <StyledTableHeader
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {index === columns.length - 1 ? (
                    ""
                  ) : (
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  )}
                </StyledTableHeader>
              );
            })}
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
                    {index === columns.length - 1 ? (
                      <Button
                        onClick={() => handleItemDelete(row)}
                        variant="contained"
                        color="secondary"
                      >
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
  return { items: state.items, filters: state.filters };
};

export default connect(mapStateToProps, { deleteItemFromList })(ItemTable);

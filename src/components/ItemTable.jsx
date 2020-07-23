import React, { useMemo, useEffect } from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { deleteItemFromList } from "../redux/actions";

import { useTable, useSortBy } from "react-table";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  },
}));

function ItemTable({ items, deleteItemFromList, filters }) {
  const classes = useStyles();

  const StyledTableHeader = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: "1.3em",
    },
  }))(TableCell);

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

  const itemsAfterFilter = () => {
    if (filters.length === 0) return items;

    return items.filter(item => filters.includes(item.category));
  };

  const data = useMemo(() => {
    return itemsAfterFilter();
  }, [items, filters]);

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  // useEffect(() => {
  //   // itemsAfterFilter();
  // }, [filters]);

  const handleItemDelete = row => {
    // row.id gives the indexed location of the item in the original array in state
    deleteItemFromList(row.id);
  };

  // console.log("itemsAfterFilter", itemsAfterFilter());

  return (
    <MaUTable className={classes.root} {...getTableProps()}>
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

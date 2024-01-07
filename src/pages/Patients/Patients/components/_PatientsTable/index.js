import * as React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

import {
  getComparator,
  stableSort,
  handleRequestSort,
  normalizeData,
} from "./misc";
import PatientsTableHead from "./PatientsTableHead";
import ParentsTableToolbar from "./ParentsTableToolbar";

export default function PatientsTable(props) {
  const {
    page,
    setPage,
    limit,
    setLimit,
    searchQuery,
    setsSearchQuery,
    patientsList,
    order,
    setOrder,
    orderBy,
    setOrderBy,
    selected,
    setSelected,
    tableDataRows,
    setTableDataRows,
  } = props;

  React.useEffect(() => {
    console.log("limit");
    console.log(limit);
    console.log("page");
    console.log(page);
  }, [limit, page]);

  React.useEffect(() => {
    if (patientsList?.data) {
      const normalizedData = normalizeData(patientsList.data);
      setTableDataRows(normalizedData);
    }
  }, [patientsList]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = tableDataRows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected?.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    console.log("newPage")
    console.log(newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setLimit(newRowsPerPage);
    setPage(1);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * limit - tableDataRows?.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(tableDataRows, getComparator(order, orderBy)).slice(
        page * limit,
        page * limit + limit
      ),
    [order, orderBy, page, limit, patientsList]
  );

  return (
    <Box sx={{ width: "100%" }}>
      {tableDataRows?.length > 0 && (
        <Paper sx={{ width: "100%", mb: 2 }}>
          <ParentsTableToolbar numSelected={selected?.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <PatientsTableHead
                numSelected={selected?.length}
                order={order}
                setOrder={setOrder}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={tableDataRows?.length}
              />
              <TableBody>
                {visibleRows &&
                  visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    console.log("row!");
                    console.log(row);

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 54 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[ 10]}
            component="div"
            count={tableDataRows?.length}
            rowsPerPage={limit}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  );
}

import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import ClinicsTableHead from "./ClinicsTableHead";
import ClinicsTableToolbar from "./ClinicsTableToolbar";

import { getClinicsAction } from "containers/Clinics/actions";

export default function ClinicsTable(props) {
  const {
    page,
    setPage,
    limit,
    setLimit,
    searchQuery,
    setsSearchQuery,
    clinicsList,
    order,
    setOrder,
    orderBy,
    setOrderBy,
    selected,
    setSelected,
    tableDataRows,
    setTableDataRows,
    isLoading,
    data,
  } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    dispatch(getClinicsAction({ page: newPage + 1, limit, searchQuery }));
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      {data?.length > 0 && (
        <Paper sx={{ width: "100%", mb: 2 }}>
          <ClinicsTableToolbar numSelected={selected?.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <ClinicsTableHead
                numSelected={selected?.length}
                order={order}
                setOrder={setOrder}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                // onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={data?.length}
              />
              <TableBody>
                {data &&
                  data.map((row, index) => {
      
                    const clinicId = row.id
                    const isItemSelected = isSelected(clinicId);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={() => navigate(`/clinicProfile?clinicId=${clinicId}`)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          {/* <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          /> */}
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row?.age}</TableCell>
                        <TableCell align="right">{row?.gender}</TableCell>
                        <TableCell align="right">{row?.pregnant}</TableCell>
                        <TableCell align="right">{row?.healthRisk}</TableCell>
                      </TableRow>
                    );
                  })}
                {/* {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 54 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
              </TableBody>
            </Table>
          </TableContainer>
          {!isLoading && (
            <TablePagination
              rowsPerPageOptions={[10]}
              component="div"
              count={clinicsList?.totalItems}
              rowsPerPage={limit}
              page={clinicsList?.currentPage - 1}
              onPageChange={handleChangePage}
              // onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Paper>
      )}
    </Box>
  );
}

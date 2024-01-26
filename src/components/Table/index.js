import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Filters from "./Filters";
import TableHead from "./TableHead";

const TableWrapper = styled.div`
  width: 100%;
  margin: 0 5%;
`;

const TableFiltersWrapper = styled.div`
  display: flex;
`;

export default function (props) {
  const {
    tableName,
    headCells,
    itemNavigateBaseUrl,
    limit,
    page,
    count,
    isLoading,
    data,
    formik,
    actionButtonText,
    handleActionButton,
    handleChangePage,
  } = props;

  const navigate = useNavigate();

  const emptyRows = limit - data?.length;

  const isActionButton = !!actionButtonText && !!handleActionButton;

  return (
    <TableWrapper>
      <TableFiltersWrapper>
        <Filters formik={formik} />
        {isActionButton && (
          <Button variant="contained" onClick={handleActionButton}>
            {actionButtonText}
          </Button>
        )}
      </TableFiltersWrapper>

      {data?.length > 0 && (
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table aria-labelledby="tableTitle" size={"medium"}>
              <TableHead headCells={headCells} />
              <TableBody>
                {data?.map((row, index) => {
                  const itemId = row.id;

                  return (
                    <TableRow
                      hover
                      onClick={() =>
                        navigate(`${itemNavigateBaseUrl}${itemId}`)
                      }
                      tabIndex={-1}
                      key={row.id}
                      sx={{ cursor: "pointer" }}
                    >
                      {headCells.map((headCell, index) => {
                        let value;
                        if (!!headCell.boolean) {
                          value = row[headCell.id] ? "yes" : "no";
                        } else {
                          value = row[headCell.id];
                        }

                        return (
                          <TableCell
                            key={`${tableName}-cell-${index}`}
                            align="center"
                          >
                            {value}
                          </TableCell>
                        );
                      })}
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
          {!isLoading && (
            <TablePagination
              rowsPerPageOptions={[10]}
              component="div"
              count={count}
              rowsPerPage={limit}
              page={page}
              onPageChange={handleChangePage}
            />
          )}
        </Paper>
      )}
    </TableWrapper>
  );
}

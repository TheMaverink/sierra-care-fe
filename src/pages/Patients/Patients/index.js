import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PatientsTable from "./components/PatientsTable";

import { getPatientsAction } from "containers/Patients/actions";
import {
  patientsListSelector,
  isPatientsSliceLoadingSelector,
  patientsListNormalizedDataSelector,
} from "containers/Patients/selectors";

export default function PatientsPage() {
  const dispatch = useDispatch();

  const patientsList = useSelector(patientsListSelector);
  const patientsListNormalizedData = useSelector(
    patientsListNormalizedDataSelector
  );
  const isLoading = useSelector(isPatientsSliceLoadingSelector);

  const [limit, setLimit] = React.useState(10);

  const [searchQuery, setsSearchQuery] = React.useState("");
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("firstName");
  const [selected, setSelected] = React.useState([]);
  const [tableDataRows, setTableDataRows] = React.useState([]);

  React.useEffect(() => {
    const initialPatientsFetch = async () => {
      dispatch(getPatientsAction({ page: 1, limit, searchQuery }));
    };
    initialPatientsFetch();
  }, []);

  return (
    <PatientsTable
      data={patientsListNormalizedData}
      patientsList={patientsList}
      limit={limit}
      setLimit={setLimit}
      searchQuery={searchQuery}
      setsSearchQuery={setsSearchQuery}
      order={order}
      setOrder={setOrder}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      selected={selected}
      setSelected={setSelected}
      tableDataRows={tableDataRows}
      setTableDataRows={setTableDataRows}
      isLoading={isLoading}
    />
  );
}

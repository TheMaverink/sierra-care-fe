import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import PatientsFilters from "./components/PatientsFilters";
import PatientsTable from "./components/PatientsTable";

import { getPatientsAction } from "containers/Patients/actions";
import {
  patientsListSelector,
  isPatientsSliceLoadingSelector,
  patientsListNormalizedDataSelector,
} from "containers/Patients/selectors";

export default function PatientsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const [tableDataRows, setTableDataRows] = React.useState({
    name: "",
    sex: "",
    ageRange: [0, 100],
  });

  const [tableFilters, setTableFilters] = React.useState([]);

  React.useEffect(() => {
    const initialPatientsFetch = async () => {
      dispatch(getPatientsAction({ page: 1, limit, searchQuery }));
    };
    initialPatientsFetch();
  }, []);

  const updateFilters = (values) => {
    setTableFilters(values);

    dispatch(getPatientsAction({ page: 1, limit, searchQuery: values.name }));
  };

  return (
    <>
      <button onClick={() => navigate("/addpatient")}>Add Patient</button>

      <PatientsFilters
        tableFilters={tableFilters}
        setTableFilters={setTableFilters}
        updateFilters={updateFilters}
      ></PatientsFilters>

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
    </>
  );
}

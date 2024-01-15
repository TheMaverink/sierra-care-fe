import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import ClinicsFilters from "./components/ClinicsFilters";
import ClinicsTable from "./components/ClinicsTable";

import { getClinicsAction } from "containers/Clinics/actions";
import {
  clinicsListSelector,
  isClinicsSliceLoadingSelector,
  clinicsListNormalizedDataSelector,
} from "containers/Clinics/selectors";

export default function ClinicsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clinicsList = useSelector(clinicsListSelector);
  const clinicsListNormalizedData = useSelector(
    clinicsListNormalizedDataSelector
  );
  const isLoading = useSelector(isClinicsSliceLoadingSelector);

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
    const initialClinicsFetch = async () => {
      dispatch(getClinicsAction({ page: 1, limit, searchQuery }));
    };
    initialClinicsFetch();
  }, []);

  const updateFilters = (values) => {
    setTableFilters(values);

    dispatch(getClinicsAction({ page: 1, limit, searchQuery: values.name }));
  };

  return (
    <>
      <button onClick={() => navigate("/addClinic")}>Add Clinic</button>

      <ClinicsFilters
        tableFilters={tableFilters}
        setTableFilters={setTableFilters}
        updateFilters={updateFilters}
      ></ClinicsFilters>

      <ClinicsTable
        data={clinicsListNormalizedData}
        clinicsList={clinicsList}
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

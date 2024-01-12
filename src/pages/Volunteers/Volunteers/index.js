import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import VolunteersFilters from "./components/VolunteersFilters";
import VolunteersTable from "./components/VolunteersTable";

import { getVolunteersAction } from "containers/Volunteers/actions";
import {
  volunteersListSelector,
  isVolunteersSliceLoadingSelector,
  volunteersListNormalizedDataSelector,
} from "containers/Volunteers/selectors";

export default function VolunteersPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const volunteersList = useSelector(volunteersListSelector);
  const volunteersListNormalizedData = useSelector(
    volunteersListNormalizedDataSelector
  );
  const isLoading = useSelector(isVolunteersSliceLoadingSelector);

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
    const initialVolunteersFetch = async () => {
      dispatch(getVolunteersAction({ page: 1, limit, searchQuery }));
    };
    initialVolunteersFetch();
  }, []);

  const updateFilters = (values) => {
    setTableFilters(values);

    dispatch(getVolunteersAction({ page: 1, limit, searchQuery: values.name }));
  };

  return (
    <>
      <button onClick={() => navigate("/addVolunteer")}>Add Volunteer</button>

      <VolunteersFilters
        tableFilters={tableFilters}
        setTableFilters={setTableFilters}
        updateFilters={updateFilters}
      ></VolunteersFilters>

      <VolunteersTable
        data={volunteersListNormalizedData}
        volunteersList={volunteersList}
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

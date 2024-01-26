import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import debounce from "lodash.debounce";

import { getVolunteersAction } from "containers/Volunteers/actions";
import {
  volunteersListSelector,
  isVolunteersSliceLoadingSelector,
  volunteersListNormalizedDataSelector,
  isThisVolunteerAdminSelector,
} from "containers/Volunteers/selectors";

import Table from "components/Table";

import { tableName, headCells, itemNavigateBaseUrl } from "./tableConfig";

const VolunteersPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5%;
`;

export default function VolunteersPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const volunteersList = useSelector(volunteersListSelector);
  const volunteersListNormalizedData = useSelector(
    volunteersListNormalizedDataSelector
  );
  const isThisVolunteerAdmin = useSelector(isThisVolunteerAdminSelector);

  const isLoading = useSelector(isVolunteersSliceLoadingSelector);

  const [limit, setLimit] = React.useState(10);

  React.useEffect(() => {
    const initialVolunteersFetch = async () => {
      dispatch(getVolunteersAction({ page: 1, limit, searchQuery: "" }));
    };
    initialVolunteersFetch();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "all",
      role: "all",
    },
  });

  const handleSearch = debounce((values) => {
    dispatch(
      getVolunteersAction({
        page: 1,
        limit: 10,
        searchQuery: values?.name,
        gender: values?.gender,
        role: values?.role,
      })
    );
  }, 1000);

  React.useEffect(() => {
    handleSearch(formik.values);
  }, [formik.values]);

  const handleActionButton = () => {
    navigate("/addVolunteer");
  };

  const handleChangePage = (event, newPage) => {
    dispatch(
      getVolunteersAction({
        page: newPage + 1,
        limit,
        searchQuery: formik.values?.name,
        gender: formik.values?.gender,
        role: formik.values?.role,
      })
    );
  };

  return (
    <>
      <VolunteersPageWrapper>
        <Table
          tableName={tableName}
          headCells={headCells}
          itemNavigateBaseUrl={itemNavigateBaseUrl}
          formik={formik}
          actionButtonText={isThisVolunteerAdmin ? "Add Volunteer" : null}
          handleActionButton={handleActionButton}
          handleChangePage={handleChangePage}
          data={volunteersListNormalizedData}
          page={volunteersList?.currentPage - 1}
          count={volunteersList?.totalItems}
          limit={limit}
          setLimit={setLimit}
          isLoading={isLoading}
        />
      </VolunteersPageWrapper>
    </>
  );
}

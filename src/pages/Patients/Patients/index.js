import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import debounce from "lodash.debounce";

import Table from "./components/Table";

import { getPatientsAction } from "containers/Patients/actions";

import {
  patientsListSelector,
  isPatientsSliceLoadingSelector,
  patientsListNormalizedDataSelector,
} from "containers/Patients/selectors";

const PatientsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5%;
`;

export default function PatientsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const patientsList = useSelector(patientsListSelector);
  const patientsListNormalizedData = useSelector(
    patientsListNormalizedDataSelector
  );
  const isLoading = useSelector(isPatientsSliceLoadingSelector);

  const [limit, setLimit] = React.useState(10);

  React.useEffect(() => {
    const initialPatientsFetch = async () => {
      dispatch(getPatientsAction({ page: 1, limit: 10, searchQuery: "" }));
    };
    initialPatientsFetch();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "all",
      ageRange: [0, 100],
    },
  });

  const handleSearch = debounce((values) => {
    dispatch(
      getPatientsAction({
        page: 1,
        limit: 10,
        searchQuery: values?.name,
        gender: values?.gender,
        ageMin: values?.ageRange[0],
        ageMax: values?.ageRange[1],
      })
    );
  }, 1000);

  React.useEffect(() => {
    if (formik.dirty) {
      handleSearch(formik.values);
    }
  }, [formik.values]);

  const handleActionButton = () => {
    navigate("/addPatient");
  };

  const handleChangePage = (event, newPage) => {
    // dispatch(getPatientsAction({ page: newPage + 1, limit, searchQuery }));
    console.log("FIX THIS");
  };

  return (
    <PatientsPageWrapper>
      <Table
        formik={formik}
        actionButtonText="Add Patient"
        handleActionButton={handleActionButton}
        handleChangePage={handleChangePage}
        data={patientsListNormalizedData}
        page={patientsList?.currentPage - 1}
        count={patientsList?.totalItems}
        limit={limit}
        setLimit={setLimit}
        isLoading={isLoading}
      />
    </PatientsPageWrapper>
  );
}

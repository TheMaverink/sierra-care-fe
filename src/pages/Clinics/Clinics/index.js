import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import debounce from "lodash.debounce";

import { getClinicsAction } from "containers/Clinics/actions";
import {
  clinicsListSelector,
  isClinicsSliceLoadingSelector,
  clinicsListNormalizedDataSelector,
} from "containers/Clinics/selectors";

import { isThisVolunteerAdminSelector } from "containers/Volunteers/selectors";

import Table from "components/Table";

import { tableName, headCells, itemNavigateBaseUrl } from "./tableConfig";

const ClinicsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5%;
`;

export default function ClinicsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clinicsList = useSelector(clinicsListSelector);

  const clinicsListNormalizedData = useSelector(
    clinicsListNormalizedDataSelector
  );

  const isThisVolunteerAdmin = useSelector(isThisVolunteerAdminSelector);

  const isLoading = useSelector(isClinicsSliceLoadingSelector);

  const [limit, setLimit] = React.useState(10);

  React.useEffect(() => {
    const initialClinicsFetch = async () => {
      dispatch(getClinicsAction({ page: 1, limit, searchQuery: "" }));
    };
    initialClinicsFetch();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
  });

  const handleSearch = debounce((values) => {
    dispatch(
      getClinicsAction({
        page: 1,
        limit: 10,
        searchQuery: values?.name,
      })
    );
  }, 1000);

  React.useEffect(() => {
    handleSearch(formik.values);
  }, [formik.values]);

  const handleActionButton = () => {
    navigate("/addClinic");
  };

  const handleChangePage = (event, newPage) => {
    dispatch(
      getClinicsAction({
        page: newPage + 1,
        limit,
        searchQuery: formik.values?.name,
      })
    );
  };

  return (
    <ClinicsPageWrapper>
      <Table
        tableName={tableName}
        headCells={headCells}
        itemNavigateBaseUrl={itemNavigateBaseUrl}
        formik={formik}
        actionButtonText={isThisVolunteerAdmin ? "Add Clinic" : null}
        handleActionButton={handleActionButton}
        handleChangePage={handleChangePage}
        data={clinicsListNormalizedData}
        page={clinicsList?.currentPage - 1}
        count={clinicsList?.totalItems}
        limit={limit}
        setLimit={setLimit}
        isLoading={isLoading}
      />
    </ClinicsPageWrapper>
  );
}

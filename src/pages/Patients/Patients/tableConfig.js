export const tableName ="patients"

export const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Name",
    },
    {
      id: "age",
      numeric: false,
      disablePadding: false,
      label: "Age",
    },
    {
      id: "gender",
      numeric: false,
      disablePadding: false,
      label: "Gender",
    },
    {
      id: "pregnant",
      numeric: false,
      boolean:true,
      disablePadding: false,
      label: "is Pregnant?",
    },
    {
      id: "healthRisk",
      numeric: false,
      disablePadding: false,
      label: "Health Risk",
    },
  ];

  export const itemNavigateBaseUrl = `/patientProfile?patientId=`
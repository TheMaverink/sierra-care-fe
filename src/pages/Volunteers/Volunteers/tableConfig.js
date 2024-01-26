export const tableName ="volunteers"

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
      id: "job",
      numeric: false,
      disablePadding: false,
      label: "Job",
    },
    {
      id: "role",
      numeric: false,
      disablePadding: false,
      label: "Role",
    },
 
  ];

  export const itemNavigateBaseUrl = `/volunteerProfile?volunteerId=`
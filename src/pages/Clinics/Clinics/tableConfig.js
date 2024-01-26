export const tableName ="clinics"

export const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Name",
    },
    {
      id: "numberMidwives",
      numeric: false,
      disablePadding: false,
      label: "No. of Midwives",
    },
    {
      id: "approximatedMonthlyNumberPatients",
      numeric: false,
      disablePadding: false,
      label: "Monthly no. patients",
    },
    {
      id: "isPrivateClinic",
      boolean:true,
      disablePadding: false,
      label: "Is Private",
    },
 
  ];

  export const itemNavigateBaseUrl = `/clinicProfile?clinicId=`
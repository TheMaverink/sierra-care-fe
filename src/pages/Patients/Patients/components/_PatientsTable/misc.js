export const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export const handleRequestSort = (
  event,
  property,
  order,
  setOrder,
  orderBy,
  setOrderBy
) => {
  const isAsc = orderBy === property && order === "asc";
  setOrder(isAsc ? "desc" : "asc");
  setOrderBy(property);
};

export const normalizeData = (data) => {
  let normalizeDataArray = [];

  data.forEach((patientData) => {
    const {
      firstName,
      middleName,
      lastName,
      sex,
      patientImages,
      dob,
      pregnant,
      healthRisk,
    } = patientData;

    normalizeDataArray.push({
      image: patientImages?.length > 0 && patientImages[0],
      name: `${firstName} ${middleName ? middleName[0] : ""} ${lastName}`,
      sex,
      pregnant,
      dob,
      healthRisk,
    });
  });

  return normalizeDataArray;
};

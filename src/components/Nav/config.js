import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

export const navConfig = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlinedIcon />,
  },

  {
    title: "Patients",
    to: "/patients",
    icon: <PeopleOutlinedIcon />,
  },

  {
    title: "Volunteers",
    to: "/volunteers",
    icon: <ContactsOutlinedIcon />,
  },

  {
    title: "Clinics",
    to: "/clinics",
    icon: <ReceiptOutlinedIcon />,
  },
];

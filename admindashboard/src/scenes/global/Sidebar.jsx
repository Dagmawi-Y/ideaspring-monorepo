import { useState } from "react";
import { Box, IconButton, Typography, useTheme, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../theme";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const menuItems = [
    { title: "Dashboard", icon: <HomeOutlinedIcon />, to: "/" },
    { title: "Manage Team", icon: <PeopleOutlinedIcon />, to: "/team" },
    { title: "Investors", icon: <PersonOutlinedIcon />, to: "/contacts" },
    { title: "Startups", icon: <PersonOutlinedIcon />, to: "/invoices" },
    { title: "Engagers", icon: <PersonOutlinedIcon />, to: "/Engagers" },
    { title: "Profile Form", icon: <ContactsOutlinedIcon />, to: "/form" },
    { title: "Calendar", icon: <CalendarTodayOutlinedIcon />, to: "/calendar" },
    { title: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, to: "/faq" },
    { title: "Bar Chart", icon: <BarChartOutlinedIcon />, to: "/bar" },
    { title: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, to: "/pie" },
    { title: "Line Chart", icon: <TimelineOutlinedIcon />, to: "/line" },
    { title: "Geography Chart", icon: <MapOutlinedIcon />, to: "/geography" }
  ];

  return (
    <Box
      sx={{
        width: isCollapsed ? "80px" : "250px",
        background: colors.primary[400],
        color: colors.grey[100],
        height: "165vh",
        transition: "width 0.3s",
        overflow: "hidden"
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
        {!isCollapsed && (
          <Typography variant="h3" color={colors.grey[100]}>
            ADMINIS
          </Typography>
        )}
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
      {!isCollapsed && (
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          {/* <img
            alt="profile-user"
            width="100px"
            height="100px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "50%", marginBottom: "10px" }}
          />
          <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
            Ed Roh
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            VP Fancy Admin
          </Typography> */}
        </Box>
      )}
      <List style={{marginBottom:"390px"}}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.title}
            component={NavLink}
            to={item.to}
            selected={selected === item.title}
            onClick={() => setSelected(item.title)}
            style={{
              color: selected === item.title ? "#6870fa" : colors.grey[100],
              backgroundColor: selected === item.title ? colors.primary[200] : "transparent",
              marginBottom: "20px",
            }}
          >
            <ListItemIcon style={{ color: colors.grey[100] }}>
              {item.icon}
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary={item.title} />}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
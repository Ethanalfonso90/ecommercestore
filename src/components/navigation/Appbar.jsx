import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

function createData(women, men, brand, era, size) {
  return { women, men, brand, era, size };
}

const rows = [
  createData("ALL WOMEN'S SALE", 159, 6.0, 24, 4.0),
  createData("BLOUSES & TOPS", 237, 9.0, 37, 4.3),
  createData("COATS", 262, 16.0, 24, 6.0),
  createData("DRESSES", 305, 3.7, 67, 4.3),
  createData("JACKETS", 356, 16.0, 49, 3.9),
  createData("JEANS", 159, 6.0, 24, 4.0),
  createData("KNITS", 237, 9.0, 37, 4.3),
  createData("SHORTS", 262, 16.0, 24, 6.0),
  createData("SKIRTS", 305, 3.7, 67, 4.3),
  createData("SWEATSHIRTS", 356, 16.0, 49, 3.9),
  createData("SWIMWEAR", 262, 16.0, 24, 6.0),
  createData("T-SHIRTS", 305, 3.7, 67, 4.3),
  createData("TROUSERS", 356, 16.0, 49, 3.9),
];

const tabs = [
  "SALE",
  "NEW IN",
  "WOMEN",
  "MEN",
  "KIDS",
  "BRANDS",
  "SPORTSWEAR",
  "DENIM",
  "BLOG",
];

export default function CenteredTabs() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  let open = Boolean(anchorEl);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    open = Boolean(anchorEl);
    // console.log(Boolean(anchorEl));
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    open = Boolean(anchorEl);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const open = Boolean(anchorEl);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((tab) => {
          return <Tab key={tab} label={tab} onMouseOver={handlePopoverOpen} />;
        })}
      </Tabs>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
          onMouseLeave: handlePopoverClose,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        TransitionComponent={Fade}
      >
        {rows.map((list) => (
          <MenuItem key={list.women} onClick={handlePopoverClose}>
            {list.women}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

// <Popover
// id="mouse-over-popover"
// sx={{
//   pointerEvents: "none",
// }}
// open={open}
// anchorEl={anchorEl}
// anchorOrigin={{
//   vertical: "bottom",
//   horizontal: "center",
// }}
// transformOrigin={{
//   vertical: "top",
//   horizontal: "center",
// }}
// onClose={handlePopoverClose}
// disableRestoreFocus
// >
// </Popover>

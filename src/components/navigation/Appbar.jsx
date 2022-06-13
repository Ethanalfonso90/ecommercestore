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
  { name: "SALE", index: 0, href: "#" },
  { name: "NEW IN", index: 1, href: "#" },
  { name: "WOMEN", index: 2, href: "#" },
  { name: "MEN", index: 3, href: "#" },
  { name: "KIDS", index: 4, href: "#" },
  { name: "BRANDS", index: 5, href: "#" },
  { name: "SPORTSWEAR", index: 6, href: "#" },
  { name: "DENIM", index: 7, href: "#" },
  { name: "BLOG", index: 8, href: "#" },
];

export default function CenteredTabs() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setValue(event.currentTarget.tabIndex);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((tab) => {
          return (
            <Tab
              tabIndex={tab.index}
              key={tab.name}
              label={tab.name}
              onMouseOver={handlePopoverOpen}
            />
          );
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

// <Menu
// id="fade-menu"
// MenuListProps={{
//   "aria-labelledby": "fade-button",
//   onMouseLeave: handlePopoverClose,
// }}
// anchorEl={anchorEl}
// open={open}
// onClose={handlePopoverClose}
// TransitionComponent={Fade}
// >
// {rows.map((list) => (
//   <MenuItem key={list.women} onClick={handlePopoverClose}>
//     {list.women}
//   </MenuItem>
// ))}
// </Menu>

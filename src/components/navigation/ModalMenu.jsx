// import { useState } from "react";
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

export default function ModalMenu(props) {
  const { anchorEl } = props;
  const open = Boolean(anchorEl);

  const handleClose = () => {
    // setAnchorEl(null);
  };
  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      {rows.map((list) => (
        <MenuItem key={list.women} onClick={handleClose}>
          {list.women}
        </MenuItem>
      ))}
    </Menu>
  );
}

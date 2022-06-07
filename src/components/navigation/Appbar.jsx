import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Popover from "@mui/material/Popover";
import ModalLink from "./ModalMenu";

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
  const [modalName, setModalName] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setModalName(event.currentTarget.innerText);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = Boolean(anchorEl);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((tab) => {
          return <Tab key={tab} label={tab} onMouseEnter={handlePopoverOpen} />;
        })}
      </Tabs>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <ModalLink name={modalName} />
      </Popover>
    </Box>
  );
}

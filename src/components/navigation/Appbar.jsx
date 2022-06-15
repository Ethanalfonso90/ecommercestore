import * as React from "react";

import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
// component imports
// import MenuLink from "./ModalMenu";

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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };
  const handleOpen = (event) => {
    setOpen(true);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div onMouseLeave={handleClose}>
        {tabs.map((btn) => {
          return (
            <Button
              key={btn.name}
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              // onClick={handleToggle}
              onMouseEnter={handleOpen}
            >
              {btn.name}
            </Button>
          );
        })}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    onMouseLeave={handleClose}
                  >
                    {rows.map((item) => {
                      return (
                        <MenuItem key={item.women} onClick={handleClose}>
                          {item.women}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}

// <Tabs value={value} onChange={handleChange} centered>
// {tabs.map((tab) => {
//   return (
//     <Tab
//       LinkComponent={Button}
//       tabIndex={tab.index}
//       key={tab.name}
//       label={tab.name}
//       onMouseOver={handlePopoverOpen}
//     />
//   );
// })}
// </Tabs>

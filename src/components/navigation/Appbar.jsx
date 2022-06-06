import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((tab) => {
          return <Tab key={tab} label={tab} />;
        })}
      </Tabs>
    </Box>
  );
}

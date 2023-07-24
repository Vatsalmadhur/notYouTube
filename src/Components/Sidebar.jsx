import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { categories } from "./utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "hidden",
        height: { sx: "auto", md: "95vh" },
        flexDirection: { md: "column" },
        width: { sx: "auto", md: "auto" },
            // border: "2px solid red",
            bgcolor:"#152238",
      }}
    >
      {categories.map((category) => (
        <Button
          // className="category-btn"
          style={{
            background: category.name === selectedCategory && "#e1ad01",
            color: "#ffffff",
            // border: "2px solid red",
            borderRadius: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: {sx:'space-evenly',md:'start'},
            // width: { sx: "50px", md: "150px" },
            // width:{sx: "300px"},
            margin: " 5px 10px",
            minWidth:'115px',
            height:'40px',
            
          }}
          key={category.name}
          onClick={() => {
            setSelectedCategory(() => category.name);
          }}
        >
          <Typography
            mt="7px"
            // mr="15px"
            sx={{
              color: category.name === selectedCategory ? "white" : "#F0B901",
              
              // border:'2px solid red',
            }}
          >
            {category.icon}
          </Typography>
          <Box  width='100px' sx={{paddingRight:'10px',fontFamily: 'Raleway, sans-serif',fontWeight:700}}>{category.name}</Box>
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;

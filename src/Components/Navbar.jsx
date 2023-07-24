import React from "react";
import { Stack, } from "@mui/material";
import { Link } from "react-router-dom";
// import { logo } from "../Components/utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#152238",
        top: 0,
        justifyContent: "space-between",
        zIndex:11
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={process.env.PUBLIC_URL + '/yt.png'} alt="logo" height={55} style={{paddingLeft:'20px'}} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;

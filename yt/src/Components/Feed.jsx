import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import fetchFromApi from "./utils/fetchFromApi";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!selectedCategory) return;
    // console.log("selected", selectedCategory)
    fetchFromApi(
      `search?part=snippet&q=${selectedCategory}&maxResults=50`
    ).then((data) => setVideos(data.data.items));
  }, [selectedCategory]);

  // console.log(videos);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid white",
          px: { sx: 0, md: 2 },
          position:"sticky",
          top:"85px",
          zIndex:3
        }}
        width="auto"
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box sx={{ width: "100vw" }}>
        <Typography px="10px"   color={"#F0B901"} fontFamily="Merriweather" fontSize="3rem">
          <span style={{ color: "white" }}>{selectedCategory}</span>
          &nbsp;Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
     
    </Stack>
  );
};

export default Feed;

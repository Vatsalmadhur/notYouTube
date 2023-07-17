import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos}) => {
    console.log(videos)
  return (
    <>
      <Box sx={{width:"100%",display:'flex',alignItems:'center',justifyContent:'center',flexWrap:"wrap"}} >
          {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
          ))}
      </Box>
    </>
  );
};

export default Videos;

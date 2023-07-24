import React, { useEffect } from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos,width}) => {
  // if(videos==null) return;
  useEffect(()=>{
    // console.log(videos);
  },[videos])
  return (
    <>
      <Box sx={{width:"100%",display:'flex',alignItems:'center',justifyContent:'space-evenly',flexWrap:"wrap"}} >
        
          {videos&& videos.map((item, idx) => (
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

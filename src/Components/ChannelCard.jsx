import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import channelDetail from "./ChannelDetail";
import { demoProfilePicture } from "./utils/constants";
import { CheckCircleOutline } from "@mui/icons-material";

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail)
  return (
    <Box sx={{
      border: "2px solid #F0B901",
      borderRadius:"10px",
      overflow: "hidden",
      width: "250px",
      height:"auto",
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration:'none'}}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            background: "#F0B901",
            opacity:0.9,
        // background: "#ffffff4d",
            boxShadow: "0 8px 32px 0 #1f26875e",
            backdropFilter: "blur(20px)",
            webkitBackdropFilter: " blur(20px )",
            // borderRadius: "10px",
            display:"flex",
            alignItems: "center",
          justifyContent: "center",
            
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
        </CardContent>
        <Typography
          sx={{ color: "white", fontSize: "1.2rem", paddingLeft: "5px" }}
        >
         {channelDetail?.snippet?.title}
          <CheckCircleOutline sx={{ color: "#F0B901",height:"30px",position:"absolute",pl:"5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography
            sx={{
              color: "white",
              fontSize: "0.8rem",
              paddingLeft: "5px",
              pt: "10px",
            }}
          >
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </Link>
    </Box>
  );
};

export default ChannelCard;

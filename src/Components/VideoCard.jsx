import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import videos from "./Videos";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "./utils/constants";
import { CheckCircleOutline } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet.title);
  return (
    <Card
      sx={{
        width: "300px",
        height: "300px",
        // border: "1px solid #eac400",
        marginY: "10px ",
        background: "#ffffff4d",
        boxShadow: "0 8px 32px 0 #1f26875e",
        backdropFilter: "blur(2px)",
        webkitBackdropFilter: " blur(2px )",
        borderRadius: "10px",
        // border: "1px solid #1f26875e",
      }}
    >
      <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl} style={{ textDecoration:'none' }}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 300, height: 170 }}
        />
      </Link>
      <CardContent sx={{ height: "100px", margin: 0, padding: 0 }}>
        <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}  style={{textDecoration:'none'}}>
          <Typography
            color={"white"}
            sx={{
              paddingLeft: "5px",
              fontSize: "1.2rem",
              fontFamily: "Raleway, sans-serif",
            }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
          style={{textDecoration:'none'}}
        >
          <Typography
            color={"white"}
            sx={{
              paddingLeft: "5px",
              pt: "10px",
              fontSize: "0.8rem",
              fontFamily: "Raleway, sans-serif",
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleOutline
              sx={{ color: "#eac400", height: "18px", position: "absolute" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

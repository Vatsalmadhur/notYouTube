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
  return (
    <Card sx={{ width: "300px", height: "auto" }}>
      <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 300, height: 200 }}
        />
      </Link>
      <CardContent
        sx={{ bgcolor: "#eac400", height: "106px", margin: 0, padding: 0 }}
      >
        <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
          <Typography color={"white"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography color={"white"}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleOutline sx={{ color: "red" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

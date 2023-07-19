import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import fetchFromApi from "./utils/fetchFromApi";
import { Link } from "react-router-dom";
import { CheckCircleOutline } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  console.log("VideoDetail");
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.data?.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).
    then((data) =>
    // console.log(data?.data?.items)
     setVideos(data?.data?.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh">
      jjjj
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex="1">
          <Box
            sx={{
              width: "100X",
              position: "sticky",
              top: "86px",
              border: "2px solid red",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="reactPlayer"
              controls
            />
            <Typography sx={{ color: "white" }} variant="h6">
              {title}
            </Typography>
            <Link to={`/channel/${channelId}`}>
              <Typography variant="h6" color="#fff">
                {channelTitle}
                <CheckCircleOutline color="red" />
              </Typography>
            </Link>

            <Typography variant="body1" sx={{ opacity: 0.7, color: "#fff" }}>
              {" "}
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography variant="body" sx={{ opacity: 0.7, color: "#fff" }}>
              {" "}
              {parseInt(likeCount).toLocaleString()} likes
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default VideoDetail;

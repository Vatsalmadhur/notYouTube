import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import fetchFromApi from "./utils/fetchFromApi";
import { Link } from "react-router-dom";
import { CheckCircleOutline } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  // console.log("VideoDetail");
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.data?.items[0])
    );

    fetchFromApi(
      `search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=50`
    ).then((data) =>
      // console.log(data.data.items)
      setRelatedVideos(data.data.items)
    );
    // console.log(videos);
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex="1" sx={{}}>
          <Box
            // px="30px"
            sx={{
              width: "auto",
              position: "sticky",
              top: "86px",
              paddingX:{xs:'5px',md:'30px'}
              // border: "2px solid red",
            }}
          >
            <Box sx={{width:{xs:'100%',md:'65vw'},height:{xs:'300px',md:'60vh'}}} >
            <ReactPlayer
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${id}`}
              className="reactPlayer"
              controls
            />
            </Box>
            <Typography sx={{ color: "white", fontSize: "1.7rem" }}>
              {title}
            </Typography>
            <Link to={`/channel/${channelId}`} style={{textDecoration:'none'}}>
              <Typography variant="h6" color="#fff">
                {channelTitle}
                <CheckCircleOutline color="red" />
              </Typography>
            </Link>

            <Typography sx={{ opacity: 0.7, color: "#fff", fontSize: "1rem" }}>
              {" "}
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography variant="body" sx={{ opacity: 0.7, color: "#fff" }}>
              {" "}
              {parseInt(likeCount).toLocaleString()} likes
            </Typography>
          </Box>
        </Box>
      <Box width="auto">
      <Videos videos={relatedVideos} />
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;

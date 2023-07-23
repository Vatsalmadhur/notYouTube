import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromApi from "./utils/fetchFromApi";
import { Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromApi(`channels?.part=snippet&id=${id}&maxResult=50`).then((data) =>
      setChannelDetail(data?.data?.items[0])
    );
    // console.log(data))
    fetchFromApi(
      `search?channelId=${id}&part=snippet&order=date&maxResults=50`
    ).then((data) => setVideos(data?.data?.items));
    // console.log(id)
  }, [id]);
  return (
    <>
      <Box sx={{ backgroundColor: "#f0ebeb", height: "300px", display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize:{sm:"1rem",md:"100px"},
          letterSpacing:{xs:"15px",md:"35px"},
          fontFamily:"Merriweather ",
          color:'#363636' }}>
          {channelDetail?.snippet?.title}
      </Box>
      <Box
        sx={{
          minHeight: "95vh",
          // border: "2px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: "-100px",
          }}
        >
          <ChannelCard channelDetail={channelDetail} />
        </Box>
        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default ChannelDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromApi from "./utils/fetchFromApi";
import { Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import ChannelCard from "./ChannelCard";
import Videos from './Videos'

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
    <Box sx={{ minHeight: "95vh" }}>
      <Box
        sx={{ backgroundColor: "#ffffff", height: "300px", zIndex: 10 }}
      ></Box>
      <ChannelCard channelDetail={channelDetail}/>
      <Videos videos={videos}/>
    </Box>
  );
};

export default ChannelDetail;

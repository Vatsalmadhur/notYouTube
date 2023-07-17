import React from 'react'
import {Box, CardContent, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";
import channelDetail from "./ChannelDetail";
import {demoProfilePicture} from "./utils/constants";

const ChannelCard = () => {
  return (
    <Box
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection:
                'column', justifyContent: 'center', textAlign:
                'center', color:
                '#fff' }}>
            <CardMedia
                image={channelDetail?.snippet?.thumbnails?.
                    high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '180px', width:
                    '180px',mb: 2, border: '1px solid #e3e3e3'}}>


            </CardMedia>
                </CardContent>
        </Link>

    </Box>
  )
}

export default ChannelCard

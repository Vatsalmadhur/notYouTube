import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import videos from "./Videos";
import {demoVideoUrl} from "./utils/constants";

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card>
        <Link to={videoId? `/videos/${videoId}`:demoVideoUrl} >
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:400,height:300}}/>
        </Link>
        <CardContent sx={{bgcolor:'#1e1e1e',height:'106px'}}>
            <Link to={videoId? `/videos/${videoId}`:demoVideoUrl}>
                <Typography>
                    lorem200
                </Typography>
            </Link>
        </CardContent>


    </Card>
  )
}

export default VideoCard;

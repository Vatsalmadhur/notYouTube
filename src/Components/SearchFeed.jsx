import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import fetchFromApi from './utils/fetchFromApi';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';

const SearchFeed = () => {
  const [videos,setVideos]=useState([]);
  const {searchTerm}=useParams();
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}&maxResults=50&order=date`).then((data)=>setVideos(data.data.items))
  },[searchTerm])

  return (
   <Box height="auto" bgcolor="#152238">
    <Typography px="10px" pl="20px"   color={"#ffffff"} fontFamily="Merriweather" sx={{fontSize:{xs:'2rem',md:'3rem'}}} >
      Showing search results for:<span style={{color:'#F0B901'}}>{searchTerm}</span>
    </Typography>
    <Videos videos={videos}/>
   </Box>
  )
}

export default SearchFeed

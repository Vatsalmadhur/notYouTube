import React, { useEffect, useState } from 'react'
import {Box, Flex, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from "./Videos"
import fetchFromApi from './utils/fetchFromApi'
const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('New');
const [videos,setVideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}&maxResults=50` ).then((data)=>
      setVideos(data)
    )
  },[selectedCategory])


  return (
   <Stack sx={{flexDirection:{sx:'column',md:"row"}}}  >
    <Box  sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid white',px:{sx:0,md:2}}} width='auto' >
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
    </Box>

    <Box>
      <Typography px='10px' variant='h4' color={"red"}>
        <span  style={{color:"white"}}>{selectedCategory}</span>
        Videos
      </Typography>
    <Videos videos={videos}/>
    </Box>


   </Stack>
  )
}

export default Feed

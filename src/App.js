import React from 'react'
import './App.css'
import {Box} from '@mui/material'
import {HashRouter, Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import ChannelDetails from './Components/ChannelDetail'
import VideoDetails from './Components/VideoDetail'
import SearchFeed from './Components/SearchFeed'
const App = () => {
  return (
    <HashRouter>
    <Box m={0} p={0} sx={{backgroundColor:'#152238'}}>
    <Navbar/>
    <Routes>
      <Route path='/' exact element ={<Feed/>} />
      <Route path='/videos/:id'  element ={<VideoDetails/>} />
      <Route path='/channel/:id'  element ={<ChannelDetails/>} />
      <Route path='/search/:searchTerm'  element ={<SearchFeed/>} />

    </Routes>
    </Box>
    </HashRouter>
  )
}

export default App;

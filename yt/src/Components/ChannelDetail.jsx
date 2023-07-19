import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import fetchFromApi from "./utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  const {id}=useParams();
  console.log(channelDetail,videos)
  useEffect(()=>{
    fetchFromApi(`channels?.part=snippet&id=${id}&maxResult=50`)
        .then((data)=>
         setChannelDetail(data?.data?.items[0]))
// console.log(data))
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date&maxResults=50`)
        .then((data)=>
            setVideos(data?.data?.items))
    // console.log(id)
  },[id])
  return (
      <div>{id}</div>
  )
}

export default ChannelDetail

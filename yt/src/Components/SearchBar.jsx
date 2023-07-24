import { Paper,IconButton, } from '@mui/material';
import React, { useState } from 'react'
import {Search} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const [searchTerm,setSearchTerm]=useState('')
  const navigate=useNavigate()
 const handelSubmit=(e)=>{
  e.preventDefault();
  if(searchTerm){
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }
 }
  
  return (
    <Paper
    component="form"
    onSubmit={handelSubmit}
    sx={{
        // border:'1px solid #F0B901',
        borderRadius:'25px',
        pl:'2',
        boxShadow:"none",
        mr:{sm:5},
        background:'transparent',
        // padding:' 3px 10px',
        height:'auto',


    }}
    >
      <input placeholder='Search...' style={{background:'tranaparent',border:"2px solid #F0B901",height:'35px',borderRadius:'20px',padding:" 0 10px"}}
      onChange={(e)=>{setSearchTerm(e.target.value)}} />
      <IconButton type='submit' sx={{ p: '10px',color: '#F0B901', }} aria-label='search'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar;

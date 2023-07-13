import { Paper,input,IconButton } from '@mui/material';
import React from 'react'
import {Search} from '@mui/icons-material'
const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={()=>{}}
    sx={{
        border:'1px solid #e3e3e3',
        borderRadius:'20',
        pl:'2',
        boxShadow:"none",
        mr:{sm:5}

    }}
    >
        <input
        className='search-bar'
        placeholder='Search...'
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar;

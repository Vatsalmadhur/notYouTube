import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { categories } from './utils/constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {

    // const selectedCategory='New';
  return (
   <Stack direction="row" sx={{overflowY:"hidden",height:{sx:'auto',md:'95vh'},flexDirection:{md:'column'}}} >

        {categories.map((category)=>(
            <Button className='category-btn' style={{background:category.name===selectedCategory && '#fc1503',color:'#ffffff'}}
            key={category.name}
            onClick={()=>{
                setSelectedCategory(category.name);
            }}
            >
                <Box mr="15px" sx={{color:category.name===selectedCategory ? 'white':'red'}}>{category.icon}</Box>
                <Box>{category.name}</Box>

            </Button>
        ))}
   </Stack>
  )
}

export default Sidebar

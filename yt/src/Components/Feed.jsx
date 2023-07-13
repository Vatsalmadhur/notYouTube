import React from 'react'
import {Box, Flex, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'
const Feed = () => {
  return (
   <Stack sx={{flexDirection:{sx:'column',md:"row"}}}  >
    <Box  sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid white',px:{sx:0,md:2}}} width='100px' >
      {/* <Typography color="white" variant='body2' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam numquam voluptate porro velit alias hic corrupti tenetur accusantium, impedit exercitationem harum rem sit facilis aliquid, quisquam, dolorum similique consequatur assumenda maiores. Ipsum.</Typography> */}
      <Sidebar/>

    </Box>


   </Stack>
  )
}

export default Feed

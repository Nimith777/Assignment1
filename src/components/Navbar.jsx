import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:'red', fontFamily:'fantasy'}}>
          HOME
          </Typography>
          <Button variant="inherit" style={{color:'red', fontFamily:'fantasy'}}><Link to={"/h"}>ADD FORM</Link></Button>
          <Button variant="inherit" style={{color:'red', fontFamily:'fantasy'}}><Link to={"/view"}>BLOG FORM</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <br/><br/>
    </div>
  )
}

export default Navbar
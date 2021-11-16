import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
      
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             ByClicle
            </Typography>
            <NavLink to="/" style={{ textDecoration: 'none', color:'white'}}><Button color="inherit">Home</Button></NavLink>
            <NavLink to="/services" style={{ textDecoration: 'none', color:'white'}}><Button color="inherit">Service</Button></NavLink>
            {
              user?.email ? 
              <Box>
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"> <Button color="inherit">Dashboard</Button></NavLink>  
                <Button onClick={logOut} color="inherit">Logout</Button>
              </Box>
              :
              <Box>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"> <Button color="inherit">Login</Button></NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/register"> <Button color="inherit">Register</Button></NavLink>
              </Box>
            }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;
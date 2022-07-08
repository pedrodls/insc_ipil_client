import * as React from 'react';
import {
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  Paper,
  CssBaseline,
  Avatar
} 
from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import _VARIABLES_ from "../../../envs/variables"
//COMPONENTS
import { mainListItems, secondaryListItems } from '../../../components/Admin/NavItems/listItems';

import { AppBar } from '../../../components/Admin/Appbar';
import { Drawer } from "../../../components/Admin/Drawer"

const mdTheme = createTheme();

interface ChildrenProps {
    children: React.ReactNode
}

function LayoutContent({children}: ChildrenProps) {
  
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{background: "orange"}}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            {_VARIABLES_._portal_name_}
            </Typography>
            <IconButton color="inherit" sx={{mr: "2rem"}}>
              <Badge badgeContent={4} color="warning">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar>EM</Avatar>
            <Typography sx={{ml: "1rem"}}>Elisio Mualumene</Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon sx={{background:"orange", borderRadius: "18px"}}/>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
        {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Layout({children}: ChildrenProps) {
  return <LayoutContent  children={children}/>;
}

import React from 'react';
import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'

function Navbar() {
  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container  py={1} justifyContent={'space-between'}>
          <Box className="cursor">
            <Typography variant="h5" className="nomeblog" display='flex' justifyContent="unset">
              - Primeira página logo - 
            </Typography>
          </Box>
            <Box display="flex" justifyContent="start" marginTop={1}>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            <Link to= '/login' className='text-decorator-none'>
              <Box mx={1} className="cursor" marginRight={120}> 
                <Typography variant="h6" >
                  Logout
                </Typography>
              </Box>
            </Link>
          </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );

}
//   function ImageAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//     </Stack>
//   );
// }
export default Navbar;
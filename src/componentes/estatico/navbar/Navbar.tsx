import React from "react";
import { AppBar, Toolbar, Box, Typography, Grid } from "@mui/material";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const[token, setToken] = useLocalStorage('token');
  let history = useNavigate();

  function goLogout(){
    setToken('')
    alert("Usuario deslogado")
    history('/login')
  }

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container py={3} justifyContent={"space-between"}>
            <Box display="flex" justifyContent="start" marginTop={1}>
              <Link to="/home"  className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" >
                  Home
                </Typography>
              </Box>
              </Link>
              <Link to="/posts"  className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
              </Link>
              <Link to="/temas"  className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
              </Link>
              <Link to="/formularioTema"  className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
              </Link>
              
                <Box mx={1} className="cursor" onClick={goLogout}>
                  <Typography variant="h6">Logout</Typography>
                </Box>

            </Box>
            <Box className="cursor">
                  <Typography
                    variant="h5"
                    className="nomeblog"
                    display="flex"
                    justifyContent="unset"
                  >
                    - Primeira página logo -
                  </Typography>
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

import React from "react";
import { AppBar, Toolbar, Box, Typography, Grid } from "@mui/material";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>( 
  (state) => state.tokens
);
  let history = useNavigate();
  const dispatch = useDispatch();


  function goLogout(){
    dispatch(addToken('')) //por nao ter o token, ele desloga a conta 
    alert("Usuario deslogado")
    history('/login')
  }

  var navbarComponent;

  if(token != ""){
    navbarComponent =  <AppBar position="static" className="navbar">
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

  }
  return (
    <>
        { navbarComponent }
    </>
  );
}
export default Navbar;

import React from "react";
import "./Home.css";
import { Box, Button, Grid, Typography } from "@mui/material";
function Home() {
  return (
    <Grid
      container
      gap={4}
      alignItems={"center"}
      justifyContent={"center"}
      className="caixa"
    >
      <Grid item xs={4}>
        <Box
          p={8}
          color={"white"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Typography className="titulo" align="center" fontWeight={900} variant="h3">
            Bem vindo ao blog pessoal
          </Typography>
          <Typography className="subtitulo" align="center" variant="body1" color= 'primary'>
            Digita uns textos dahora pra nóis ai...
          </Typography>
          <Button variant="outlined" className="botao">
            Ver Postagens
          </Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <img src="https://i.imgur.com/9OZAbB5.png" alt="" width={"100%"} />
      </Grid>
      <Grid xs={12} className='postagens'> </Grid>
    </Grid>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import "./Home.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
import imagemHome from '../../assets/imagens/imagemHome.jpg';
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import Postagem from "../../models/Postagem";


function Home() {
    const [posts, setPosts] = useState<Postagem[]>([])
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>( //é esse useSelector que vai acessar o store pegar o token e atribuir a essa constante
      (state) => state.tokens
    );
//observa se há um token salvo, se sim, estará logado, se nao, aparece a mensagem 
    useEffect(() => {
      if(token == ""){
        alert("Você precisa estar logado")
        history("/login")
      }
    })

  return (
    <Grid
      container
      gap={6}
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
            Primeira Página -logo
          </Typography>
          <Typography className="subtitulo" align="center" variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum minima dolorem ab libero omnis, pariatur nisi veniam eius autem laboriosam. Voluptates quas dolor tempore natus eveniet consectetur deleniti eligendi porro.
          </Typography>
          <Link to= "/posts">
          <Button variant="outlined" className="botao">Ver Postagens</Button>
          </Link>
        </Box>
        <Box marginRight={1}>
          <ModalPostagem/>
        </Box>
      </Grid>
      <Grid item xs={6} className="imagemHome">
      </Grid>
      <Grid xs={12} className='postagens'>
          <TabPostagem />
      </Grid>
    </Grid>
  );
}

export default Home;

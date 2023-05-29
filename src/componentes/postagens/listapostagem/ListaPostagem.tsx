import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Service";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaPostagem.css";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([]);
    const [token, setToken] = useLocalStorage("token");
    let navigate = useNavigate();

    useEffect(() => {
    if (token == "") {
        alert("Você precisa estar logado");
        navigate("/login");
    }
    }, [token]);

    async function getPost() {
    await busca("/postagens", setPosts, {
        headers: {
        Authorization: token,
        },
    });
    }

    useEffect(() => {
    getPost();
    }, [posts.length]);

    return (
    <>
        {posts.map((post) => (
            <Box style={{ maxWidth: 345, height: 220}}>
    <Card>
    <CardActionArea>
    <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
    />
    <CardContent>
        <Typography color="textSecondary" gutterBottom>
        Postagens
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {post.titulo}
        </Typography>
        <Typography variant="body2">
        {post.texto}
        </Typography>
        <Typography variant="body2" component="p">
        {post.tema?.descricao}
        </Typography>
    </CardContent>
    <CardActions>
            <Box >
            <Link
                to={`/formularioPostagem/${post.id}`}
                className="text-decorator-none"
            >
                <Box mx={1}>
                <Button
                    variant="contained"
                    className="marginLeft"
                    size="small"
                    color="primary"
                >
                    atualizar
                </Button>
                </Box>
            </Link>
            <Link
                to={`/deletarPostagem/${post.id}`}
                className="text-decorator-none"
            >
                <Box mx={1}>
                <Button variant="contained" size="small" color="secondary">
                    deletar
                </Button>
                </Box>
            </Link>
            </Box>
        </CardActions>
    </CardActionArea>
</Card>
</Box>
        ))}
    </>
    );
}

export default ListaPostagem;

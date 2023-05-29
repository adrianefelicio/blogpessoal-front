import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
    return (
    <Card sx={{ maxWidth: 345 }}>
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
            <Typography variant="body2" color="text.secondary">
            {post.texto}
            </Typography>
            <Typography variant="body2" component="p">
            {post.tema?.descricao}
            </Typography>
        </CardContent>
        <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
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
    );
}

import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button } from "@material-ui/core"
import {Box} from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';
import './ModalPostagem.css';
import CadastroPost from '../cadastroPost/CadastroPost';


function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`, //movimenta o elemento no eixo x e y
    };
}

const useStyles = makeStyles((theme: Theme) => //estou importando de MUI e toda sua configuração -> cria um método makeStyles e tem como parâmetro um tema, e outro método chamado createStyles que define outras configurações que ficam armazenadas nessa constante;
    createStyles({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    }),
);

function ModalPostagem () {
    const classes = useStyles(); //inicializou a constante classe com as configurações anteriores 
    const [modalStyle] = React.useState(getModalStyle); //está guardando as informações que deve centralizar o modal // nao queremos alterar o valor 
    const [open, setOpen] = React.useState(false); // React.useState é um jeito diferente de trazer o useState para dentro do modal sem precisar importar do modo tradicional

    const handleOpen = () => { //altera o stateOpen para true, ou seja, abre o modal 
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const body = ( //essa constante body contém o botão e a importação de uma tag CadastroPost, ou seja todo o arquivo cadastroPost foi importada dentro dessa constante, ou seja, ficará dentro do corpo do modal 
    <div style={modalStyle} className={classes.paper}> 
        <Box display="flex" justifyContent="flex-end" className="cursor"> 
        <CloseIcon onClick={handleClose}/>

        </Box>

        <CadastroPost/>

    </div>
    );

    return (
    <div>
        <Button
        variant="outlined"
        className="btnModal" //ta recebendo a classe que define borda e cor de fundo branca 
        onClick={handleOpen}>Nova Postagem</Button> 
        <Modal //esse botão que vai renderizar a nova postagem //aciona dentro dela a variavel body, ou seja, dentro desse trecho estamos renderizando todo o conteúdo de body
        open={open} //se verdadeiro o modal é aberto //
        onClose={handleClose} //essa função efetua o fechamento do modal, tb é acionada quando clico fora do modal e também vai fechar 
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        {body}
        </Modal>
    </div>
    );
}
export default ModalPostagem;
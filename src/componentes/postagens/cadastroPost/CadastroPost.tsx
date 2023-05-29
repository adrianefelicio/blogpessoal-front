import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import {useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([]) //tipo array, vai trabalhar com a listagem de temas que estão cadastrados na API //temas e setTemas armazena todos os temas que JÁ estão cadastrados na API
    const [token, setToken] = useLocalStorage('token'); //token armazenado no LocalStorage

    useEffect(() => {
        if (token == "") {  //se o token estiver armazenado no LocalStorage significa que o usuário está logado e ai ele pode fazer as requisições
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>( //armazena um tema específico de acordo com um ID, por isso está no singular 
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({ //efetuar o cadastro de uma postagem 
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => { //monitora o stateTema, vai verificar se tem um tema específico, pode selecionar algum tema, se tiver essa alteração, aciona o setPostagem e muda o tema e atribui o tema à postagem.
        setPostagem({ //armazena as postagens específicas que foi retornada da api
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => { //todos os temas que são retornados da API são armazenados em Temas, o use
        getTemas()
        if (id !== undefined) {  // se o id for diferente de undefined significa que eu tenho um id, logo se eu tenho um id será feita uma busca de uma postagem pelo id -> findByIdPostagem
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() { // 
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) { //busca na API pelo Id de uma postagem específica 
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) { //se mexer no input de titulo ou texto, vai acionar o updatedPostagem e será atualizado o titulo e texto alterado -> preencherá o setPostagem

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) { //onSubmit : envio das informações que o usuário preencher em postagens 
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, { //se eu tenho um id, ou seja uma postagem cadastrada, ela vai acionar o método put para atualizar essa postagem ja existente 
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso'); //depois da atualização aparece essa mensagem 
        } else { //caso eu nao tenha um Id, quer dizer que eu estou criando uma nova postagem, ou seja, será acionado o método post, onde eu passo também na rota de postagem, passo as informações novas que eu quero cadastrar e efetuo o cadastro 
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso'); // quando a postagem é cadastrada 
        }
        back() // a função back criada abaixo é chamada aqui

    }

    function back() { //a partir do momento que o usuario preencher as informações da postagem, o back vai me redirecionar para a tela de posts para listar todas as postagens já cadastradas
        navigate('/posts') // a função é criada aqui
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, { //vai retornar toda a listagem de temas, dentro do valor que o usuário selecionar 
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => ( //temas no plural, armazena TODOS os temas. Map -> andar por cada tema que existe dentro de Temas -> setTemas = array, armazena varios temas. map -> vai pegar os ids e descrição dos temas e vai exibir para o usuário, somente a descrição.
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;
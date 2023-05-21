import React, { ChangeEvent, useState, useEffect } from 'react'
import './Login.css'
import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import UserLogin from '../../models/UserLogin'
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../services/Service'
import Imagem from '../../assets/imagens/imagem.jpg'

function Login(){
  let history = useNavigate();
  const [token, setToken] = useLocalStorage('token'); //faz o controle do token dentro do localStorage
  const[userLogin, setUserLogin] = useState<UserLogin>({

    id: 0,          //valores zerados, pois não foi feito nenhum cadastro/login
    usuario: '',
    senha: '',
    token: ''
  }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>){

      setUserLogin({
        ...userLogin,
        //[e.target.name] : se referindo ao nome do campo, no caso onde será feia a mudança -> captura a propriedade
        // e.target.value : é o valor que é alterado de fato no momento que o usuário digitar algo -> captura o valor digitado
        [e.target.name]: e.target.value    //é utilizada para atualizar a model com o valor que o usuário digitar no campo de input | é um objeto com chave e valor [] representa o nome do campo e value -> o valor que o usuário digitou
      })

    }

    useEffect(()=>{                 //É responsável por fazer o controle de ciclo de vida de um componente
        if (token != ''){           //verificar se o token está ou não vazio
          history('/home')
        }                
    }, [token])                           

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault(); //impede que o botão atualize a tela
        try{
            await login(`/usuarios/logar`, userLogin, setToken)           //resposta da requisição da API
            // setToken(resposta.data.token) //responsável por gravar o token que vem da API no localStorage

            alert('Usuário logado com sucesso!');
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }
        // console.log('userLogin ' + Object.values(userLogin))                //verifica se os dados inseridos em login estão corretos - foi feito só para teste 
    }

  return ( //direction = deixa tudo numa linha só / justifyContent='center' -> centralizar o conteúdo
    <Grid container direction='row' justifyContent='center' alignItems='center' className="form" > 
      <Grid alignItems='center' xs={6}>
        <Box paddingX={30} className="formularioLogin">
              <form onSubmit={onSubmit}> {/*chamando a função onSubmit*/}
                <Typography variant='h3' gutterBottom component='h3' align='center' className="form1">Entrar</Typography>{/* tag para texto / variant define qual o tipo de título / gutterBottom é uma margem inferior / component serve para reforçar que se trata de um h3*/}
                 <TextField className="preencher" value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/> {/*Campo de texto - campo de usuário */}
                  <TextField className="preencher" value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password'/>
                  <Box marginTop={2} textAlign='center'>

                      <Button type='submit' variant='contained' className="botao">
                        Logar
                      </Button>

                  </Box>
                </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
              </Box>
                <Link to='/cadastrousuario'>
                <Typography variant='subtitle1' gutterBottom align='center' className="cadastre">Cadastre-se</Typography>
                </Link>
            </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem1">
      </Grid>
      </Grid>
  )

    }

export default Login
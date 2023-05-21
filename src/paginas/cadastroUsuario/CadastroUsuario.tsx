import React, {useState, useEffect, ChangeEvent} from 'react'
import './CadastroUsuario.css'
import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User'
import { cadastroUsuario } from '../../services/Service';

function CadastroUsuario() {
  
  const navigate = useNavigate();

  // state para controlar o formulário enquanto o usuário preenche o mesmo
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '', 
  });

  // state que vai receber a resposta do backend, para verificar se veio tudo ok, ou seja, armazena os valores do retorno da API
  const [userResp, setUserResp] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
  });

  // state para armazenar o campo de confirmação de senha, e fazer a checagem com a senha do usuário -> verifica se o que foi digitado em confirmar a senha, foi digitado da mesma forma em senha;
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // função para atualizar o estado do confirmar senha
  function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  // função para atualizar o estado de controle do formulário de usuário, automatizada para todos os campos
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  // função de disparo da requisição para o backend, é bom deixar ela como assincrona
  async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    // verificar se os campos de senha e confirmar senha são iguais, e com no minimo 8 caracteres
    if (user.senha === confirmarSenha && user.senha.length >= 8) {
      // caso passe pelo IF, vai executar a tentativa de cadastro, e dar o alerta de sucesso
      try {
        await cadastroUsuario('/usuarios/cadastrar', user, setUserResp);
        alert('Usuário cadastrado com sucesso')
      } catch (error) {
        // se der erro no cadastro, por exemplo por e-mail repetido, vai cair nessa msg de erro
        alert('Falha ao cadastrar o usuário, verifique os campos');
      }
    } else {
      // aqui é a mensagem de erro para o caso dos campos de senha estarem diferentes, vai avisar, e apagar os dois campos
      alert('Os dados estão incorretos');
      setUser({ ...user, senha: '' });
      setConfirmarSenha('')
    }
  }

  // controle de efeito, para levar a pessoa para a tela de login assim que o backend devolver o JSON de cadastro ok -> se o id for diferente de 0, significa que ja tem um valor cadastrado 
  useEffect(() => {
    if (userResp.id !== 0) {
      navigate('/login');
    }
  }, [userResp]);

  // função de navegação para o botão de cancelar
  // (só fiz essa função pq se eu usasse o Link no botão, quebrava o meu layout, ela não é necessária, da pra fazer com Link mesmo)
  function voltar(){
    navigate('/login')
  }

    return(
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={5} className="imagem2"></Grid>
        <Grid item xs={7}>
        <Box padding={10}>
            <Box className="boxcadastro">
            <form onSubmit={cadastrar} className="formulario">
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}} className="textos2">Cadastrar</Typography>
                        <TextField className="preencher" value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event) } id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField className="preencher" value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField className="preencher" value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <TextField className="preencher" value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmSenha(event)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                            <Button variant='contained' color='secondary' className="btnCancelar" onClick={voltar}>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className="btnCadastrar">
                                    Cadastrar
                                </Button>
                        </Box>
            </form>
            </Box>
        </Box>
        </Grid>
        </Grid> 
    );

}

export default CadastroUsuario; //como se fosse o "public" em Java, ou seja, com isso o componente usuário pode ser acessado por outros componentes

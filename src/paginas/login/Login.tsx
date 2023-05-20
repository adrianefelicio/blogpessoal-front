import React from 'react'
import './Login.css'
import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Imagem from '../../assets/imagens/imagem.jpg'

function Login(){
  return ( //direction = deixa tudo numa linha só / justifyContent='center' -> centralizar o conteúdo
    <Grid container direction='row' justifyContent='center' alignItems='center' > 
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
            <form>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>Entrar</Typography>{/* tag para texto / variant define qual o tipo de título / gutterBottom é uma margem inferior / component serve para reforçar que se trata de um h3*/}
                 <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/> {/*Campo de texto - campo de usuário */}
                  <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password'/>
                  <Box marginTop={2} textAlign='center'>
                    <Link to='/home' className='text-decorator-none'>
                      <Button type='submit' variant='contained' color='primary'>
                        Logar
                      </Button>
                    </Link>
                  </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
              </Box>
                <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
            </Box>
        </Box>
      </Grid>
      <Grid xs={6} style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1576093742342-ae7001bdc5e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=407&q=80)`
        , backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
      }}>

      </Grid>
      </Grid>
  )

    }

export default Login
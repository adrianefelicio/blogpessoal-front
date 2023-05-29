import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>( 
    (state) => state.tokens
  );
  
  var footerComponent;

  if (token != "") {

    footerComponent =     <footer className='footer'>
    <Grid container py={1} alignItems={'center'}>
      <Grid item xs={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Typography className="itemsfooter" variant='h6'>Blog Primeira Página - Feito por: Adriane Felicio - 2023</Typography>
        <Box display={'flex'}>
          <Typography className="mui">Feito com:</Typography>
          <KeyboardArrowLeftIcon />
          <Typography className="mui" >React / MUI</Typography>
          <KeyboardArrowRightIcon />
        </Box>
      </Grid>
      <Grid item xs={4} display={'flex'} justifyContent={'center'} >
        <Box display={'flex'} gap={2} alignItems={'center'} className='iconesFooter'>
          <GitHubIcon fontSize='inherit' className='iconeInd' />
          <LinkedInIcon fontSize='inherit' className='iconeInd' />
        </Box>
      </Grid>
      <Grid item xs={4} display={'flex'} justifyContent={'center'}>
        <Typography className="itemsfooter" variant='h5'>Em parceria com: Generation Brasil</Typography>
      </Grid>
    </Grid>
  </footer>

  }
  return (
    <>
      {footerComponent}
    </>

  )
}

export default Footer
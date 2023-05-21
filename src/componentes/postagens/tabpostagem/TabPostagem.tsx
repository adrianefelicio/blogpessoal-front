import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){ // newValue é o responsável por armazenar o valor do clique, ou seja, se cliquei na tab 1 ou 2, é o valor que ele armazena
        setValue(newValue);
    }
    return (
    <>
        <TabContext value={value}> {/* como se fosse o container das nossas abas/guias */}
        <AppBar position="static">  {/* AppBar possui duas Tabs, que são as abas mesmo */}
            <Tabs className="tabs" centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre Nós" value="2" />
            </Tabs>
        </AppBar>
         <TabPanel value="1" > {/* Todas as postagens, redireciona para esse painel  */}
            <Box display="flex" flexWrap="wrap" justifyContent="center" className="container">
            <ListaPostagem />
            </Box>
        </TabPanel>
         <TabPanel value="2"> {/* Sobre nós  */}
            <Typography variant="h5" gutterBottom  component="h5" align="center" className="titulo">Sobre Nós</Typography>
            <Typography variant="body1" gutterBottom className='sobrenos' align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!</Typography>
        </TabPanel>
        </TabContext>
    </>
    );
}
export default TabPostagem  
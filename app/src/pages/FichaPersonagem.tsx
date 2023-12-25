import React from 'react'
import { Box, Container, CssBaseline, Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Typography } from '@mui/material'
// import Atributos from '../components/Atributos'
import { AccountBox, MenuBook, Article, Backpack, Shield, Savings } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles';

type keysTypes = 'atributos' | 'equipamento' | 'inventario' | 'anotacoes' | 'historia'

function Home() {
    const theme = useTheme()

    const [selection, setSelection] = React.useState<keysTypes>('atributos')
    const sidebarItems = [
        { id: 'atributos', label: 'Atributos', icon: <AccountBox style={{ color: selection == 'atributos' ? theme.palette.background.paper : theme.palette.text.primary }} /> },
        { id: 'equipamento', label: 'Equipamento', icon: <Shield style={{ color: selection == 'equipamento' ? theme.palette.background.paper : theme.palette.text.primary }} /> },
        { id: 'inventario', label: 'Inventário', icon: <Backpack style={{ color: selection == 'inventario' ? theme.palette.background.paper : theme.palette.text.primary }} /> },
        { id: 'anotacoes', label: 'Anotações', icon: <Article style={{ color: selection == 'anotacoes' ? theme.palette.background.paper : theme.palette.text.primary }} /> },
        { id: 'historia', label: 'História', icon: <MenuBook style={{ color: selection == 'historia' ? theme.palette.background.paper : theme.palette.text.primary }} /> },

    ]

    const handleSelection = (event: React.MouseEvent<HTMLElement>) => {
        let id = event.currentTarget.id
        console.log('hey', id)
        setSelection(id as keysTypes)
    }

    const nome = 'Sebastian'

    return (
        <Container
            component="main"
            sx={{
                marginLeft: 0,
                paddingLeft: '0 !important',
                height: '100vh'
            }}
        >
            <CssBaseline />
            <Box display={'flex'}>
                <Drawer variant='permanent'>
                    <Box sx={{ height: '100%' }}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography variant='h6' textAlign={'center'}>
                                        {nome}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            {sidebarItems.map(item => {
                                return (
                                    <ListItem key={item.id}>
                                        <ListItemButton id={item.id} onClick={handleSelection} selected={item.id == selection}>
                                            <ListItemIcon sx={{ minWidth: 35 }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText>
                                                {item.label}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                        <ListItem sx={{ position: 'absolute', bottom: 0, backgroundColor: '#2a2a2a' }}>
                            <Box display={'flex'} paddingX={'16px'} paddingY={'8px'}>
                                <ListItemIcon sx={{ minWidth: 35 }}>
                                    <Savings style={{ color: '#ffd700' }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: '#ffd700' }}>
                                    Ouro: 256
                                </ListItemText>
                            </Box>
                        </ListItem>
                    </Box>
                </Drawer>
                <Box bgcolor={'gray'} height={'100vh'}>
                    {/* {sidebarItems.map(item => {
                        if (item.id === selection) {
                            return item.element
                        }
                    })} */}
                </Box>
            </Box>

        </Container >
    )
}

export default Home

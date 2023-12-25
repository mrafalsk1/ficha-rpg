import React from 'react'
import { Box, Container, CssBaseline, Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import Atributos from '../components/Atributos'
import Atributo from '../interface/Atributo'
import { AccountBox, MenuBook, Article, Backpack, Shield, Savings } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles';

type keysTypes = 'atributos' | 'equipamento' | 'inventario' | 'anotacoes' | 'historia'

function Home() {
    const nome = 'Rubick'
    const saldoPontos = 5
    const atributos: Atributo[] = [
        {
            nome: 'for', label: 'Força', base: 1, bonus: 2, efeito(base, bonus) {
                return ('D.F.: +' + (Math.floor((base + bonus) / 2) + (Math.floor((base + bonus) / 10) * 2)))
            },
        },
        {
            nome: 'int', label: 'Inteligência', base: 2, bonus: 4, efeito(base, bonus) {
                return ('P.M.: +' + (Math.floor((base + bonus) / 3) + (Math.floor((base + bonus) / 13) * 2) * 2))
            }
        },
        {
            nome: 'agi', label: 'Agilidade', base: 3, bonus: 6, efeito(base, bonus) {
                return ('Total: ' + base + bonus)
            }
        },
        {
            nome: 'vit', label: 'Vitalidade', base: 4, bonus: 8, efeito(base, bonus) {
                return ('Defesa: +' + (Math.floor((base + bonus) / 3) + (Math.floor((base + bonus) / 10) * 2)))
            }
        },
        {
            nome: 'des', label: 'Destreza', base: 5, bonus: 0, efeito(base, bonus) {
                return ('Dano: +' + (Math.floor((base + bonus) / 3) + Math.floor((base + bonus) / 9) * 2))
            }
        },
    ]
    const theme = useTheme()

    const [selection, setSelection] = React.useState<keysTypes>('atributos')
    const sidebarItems = [
        { id: 'atributos', label: 'Atributos', element: <Atributos key={'atributos'} saldoPontos={saldoPontos} atributos={atributos} />, icon: <AccountBox style={{ color: selection == 'atributos' ? theme.palette.background.paper : theme.palette.text.primary }} /> },
        { id: 'equipamento', label: 'Equipamento', element: <div></div>, icon: <Shield style={{ color: selection == 'equipamento' ? theme.palette.background.paper : theme.palette.text.primary }} /> },
        { id: 'inventario', label: 'Inventário', element: <div></div>, icon: <Backpack style={{ color: selection == 'inventario' ? theme.palette.background.paper : theme.palette.text.primary }} /> },
        { id: 'anotacoes', label: 'Anotações', element: <div></div>, icon: <Article style={{ color: selection == 'anotacoes' ? theme.palette.background.paper : theme.palette.text.primary }} /> },
        { id: 'historia', label: 'História', element: <div></div>, icon: <MenuBook style={{ color: selection == 'historia' ? theme.palette.background.paper : theme.palette.text.primary }} /> },

    ]

    const handleSelection = (event: React.MouseEvent<HTMLElement>) => {
        let id = event.currentTarget.id
        console.log('hey', id)
        setSelection(id as keysTypes)
    }

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
                    {sidebarItems.map(item => {
                        if (item.id === selection) {
                            return item.element
                        }
                    })}
                </Box>
            </Box>

        </Container >
    )
}

export default Home

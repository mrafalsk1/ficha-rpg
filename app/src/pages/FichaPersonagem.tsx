import React from 'react'
import { Box, Container, CssBaseline, Drawer, List, ListItem, ListItemText, ListItemButton, Typography } from '@mui/material'
import Atributos from '../components/Atributos'
import Atributo from '../interface/Atributo'

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

    const drawerWidth = '15vw'
    const [selection, setSelection] = React.useState<keysTypes>('atributos')
    const sidebarItems = [
        { id: 'atributos', label: 'Atributos', element: <Atributos key='atributos' saldoPontos={saldoPontos} atributos={atributos} /> },
        { id: 'equipamento', label: 'Equipamento', },
        { id: 'inventario', label: 'Inventário' },
        { id: 'anotacoes', label: 'Anotações' },
        { id: 'historia', label: 'História' },
    ]

    const sidebarSelection = (event: React.MouseEvent<HTMLElement>) => {
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
            <Box display={'flex'} >
                <Drawer
                    variant='permanent'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            // boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: 'gray',
                            left: 0
                        }
                    }}
                >
                    <Box>
                        <ListItem>
                            <ListItemText>
                                <Typography variant='h6' textAlign={'center'}>
                                    {nome}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <List>
                            {sidebarItems.map(item => {
                                return (
                                    <ListItem key={item.id}>
                                        <ListItemButton id={item.id} onClick={sidebarSelection}>
                                            <ListItemText>
                                                {item.label}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
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

import React from 'react'
import { Box, Container, CssBaseline, Drawer, List, ListItem, ListItemText, ListItemButton, Typography } from '@mui/material'
import Atributos from '../components/Atributos'

type keysTypes = 'atributos' | 'equipamento' | 'inventario' | 'anotacoes' | 'historia'

function Home() {

    const drawerWidth = '15vw'
    const [selection, setSelection] = React.useState<keysTypes>('atributos')
    const sidebarItems = [
        { id: 'atributos', label: 'Atributos', element: <Atributos /> },
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
                                    Rubick pe de pano
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
                            {/* <ListItem>
                                <ListItemText>
                                    Ouro: 256
                                </ListItemText>
                            </ListItem> */}
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

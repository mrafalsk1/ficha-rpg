import React from 'react'
import { Box, Container, CssBaseline, Drawer, List, ListItem, ListItemText, ListItemButton, Typography } from '@mui/material'

function Home() {
    // const drawerWidth = 150
    const [selection, setSelection] = React.useState('atributos')
    const sidebarItems = [
        { id: 'atributos', label: 'Atributos' },
        { id: 'equipamento', label: 'Equipamento' },
        { id: 'inventario', label: 'Inventário' },
        { id: 'anotacoes', label: 'Anotações' },
        { id: 'historia', label: 'História' },

    ]
    const sidebarSelection = (event: React.MouseEvent<HTMLElement>) => {
        let id = event.currentTarget.id
        console.log('hey', id)
        setSelection(id)
    }

    return (
        <Container component="main">
            <CssBaseline />
            <Box
                sx={{ display: 'flex' }} // TOMA NO U
            >
                <Drawer
                    anchor='left'
                    variant='permanent'
                // sx={{ width: drawerWidth, '& .MuiDrawer-paper': { width: drawerWidth } }} // TOMA NO U
                >
                    <List>
                        {sidebarItems.map(item => {
                            return (
                                <ListItem key={item.id}>
                                    <ListItemButton id={item.id} onClick={sidebarSelection}>
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Drawer>
                <Box
                    bgcolor={'gray'}
                >
                    <Box>
                        <Typography component="h1" variant="h5">
                            {selection}
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Container>
    )
}

export default Home

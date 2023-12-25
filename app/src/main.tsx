import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Error from './pages/Error.tsx'
import FichaPersonagem from './pages/FichaPersonagem.tsx'
import Home from './pages/Home.tsx'

import { ThemeProvider, createTheme } from '@mui/material'
// import './index.css'

const defaultTheme = createTheme()
const darkTheme = createTheme({
  // ...defaultTheme,
  palette: {
    background: {
      default: "#1e1f20",
      paper: '#131314',
    },
    text: {
      primary: '#ffffff',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: 250,
          marginLeft: '2.5vh',
          // [defaultTheme.breakpoints.down('md')]: {
          //   width: 150,
          // }
        },
        paper: {
          borderRadius: 20,
          width: 250,
          height: '95%',
          marginTop: '2.5vh',
          marginBottom: '2.5vh',
          marginLeft: '2.5vh',
          border: 'none',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '&.Mui-selected': {
            backgroundColor: '#ffffff',
            color: '#131314',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            '&.Mui-selected:hover': {
              backgroundColor: '#ffffff',
            }
          },
        },
      }
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Noto Sans'
    ].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/path",
    element: <FichaPersonagem />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

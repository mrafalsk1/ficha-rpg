import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material'

function Home() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("name"));



  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: -20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Ficha RPG
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome do Personagem"
            name="name"
            autoComplete="name"
            autoFocus
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          {/* <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Container>
  )
}

export default Home

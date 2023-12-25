import { Box, Button, Container, Typography, Grid } from '@mui/material';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              Sai daqui candango aqui não te pertence.
            </Typography>
            <Button variant="contained" href='/'>Voltar</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
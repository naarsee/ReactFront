import { Box, Container, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <Container>
      <Box marginTop="10rem">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button component={Link} to='/users' variant="contained" disableElevation fullWidth>
              Usuarios
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button component={Link} to='/books'variant="contained" disableElevation fullWidth>
              Libros
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}


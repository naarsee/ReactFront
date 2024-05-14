import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box>
      <AppBar position='static'>
        <Container>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Typography variant='h6'>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                Digital Ignition
              </Link>
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button component={Link} to='/users/newUser' variant='contained' color='secondary'>
                Registrar Usuario
              </Button>
              <Button component={Link} to='/' variant='contained' color='secondary' style={{ marginLeft: 10 }}>
                Inicio
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

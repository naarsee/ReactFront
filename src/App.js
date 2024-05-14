//navegacion entre rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksList from './components/BooksList';
import UsersList from './components/users/UsersList';
import NavBar from './components/NavBar';
import NewUser from './components/users/NewUser'
import Home from './components/Home';
import {Container} from '@mui/material'
import ModifyUser from './components/users/ModifyUser';


export default function App() {
  return (
    <BrowserRouter>
      <Container>
      <NavBar/>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<BooksList />} />
          <Route path='/users' element={<UsersList/>}/>  
          <Route path='/users/newUser' element={<NewUser/>} />   
          <Route path='/user/:id/edit' element={<ModifyUser/>} />
        </Routes>
      </Container>
    </BrowserRouter> 
  );
}

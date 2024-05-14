import {useEffect, useState} from 'react';
import {Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UsersList() {

  const[users,setUsers] = useState([]);
  const navigate=useNavigate();

  const loadUsers=async () => {
    const res = await fetch('http://localhost:4000/users');
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE"
      });
  
      if (!res.ok) {
        throw new Error("Error al eliminar usuario, esta ligado a un libro.");
      }
  
      // Actualizar la lista de usuarios
      loadUsers();
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <>
      <h1> Usuarios </h1>
      {
        //como mostrare los libros
        users.map(user =>(
          <Card key={user.id} style={{marginBottom:'1rem', background:'#576b7a'}}>
            <CardContent style={{display:'flex',justifyContent:'space-between'}} >
              <div>
                <Typography color='white'>ID del usuario: {user.id} </Typography>
                <Typography color='white'>Name: {user.name} </Typography>
                <Typography color='white'>Email: {user.email} </Typography>  
              </div>

              <div>
                <Button variant='contained' color='inherit' onClick={() => navigate(`/user/${user.id}/edit`)}>Editar</Button>
                <Button style={{marginLeft:'0.5rem'}} variant='contained' color='warning' onClick={() => handleDelete(user.id)}>Eliminar</Button>
              </div>
            </CardContent>
          </Card>


        ))
      }
    </>
  )
}

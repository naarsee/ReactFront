import {Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'

export default function NewUser() {
    const navigate=useNavigate();
    const params=useParams();

    const loadUser = async (id) => {
        const res=await fetch(`http://localhost:4000/users/${id}`);
        const data=await res.json();
        console.log(data)
    }

    useEffect(() => {
        if (params.id){
            loadUser(params.id);
        }
    },[params.id])
    
    const [user,setUser]=useState({
        name:null,
        email:null,
        password:null
    });
    const handleSubmit = async e =>{
        //evito refresh de la pag
        e.preventDefault();
        //console.log(user);
        const res = await fetch('http://localhost:4000/auth/register',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{'Content-Type':'application/json'}
        });
        const data= await res.json();
        console.log(data);
        navigate('/');
    }

    const handleChange = e =>{
        //console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]:e.target.value});
    } 
  return (
    <Grid container direction='column' alignItems='center' justifyContent='center'>
        <Grid item xs={3}>
            <Card sx={{mt:5}}style={{background: '#1E272E', padding:'1rem'}}>
                <Typography variant='h6' textAlign='center' color='white' >
                    Registro de un usuario nuevo
                </Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField sx={{display: 'block', margin: '.8rem 0'}} 
                        variant='filled' label='name'
                        name='name' onChange={handleChange}
                        inputProps={{style:{color:'white'}}}
                        InputLabelProps={{style:{color:'white'}}} />
                        <TextField sx={{display: 'block', margin: '.8rem 0'}} 
                        variant='filled' label='email'
                        name='email' onChange={handleChange}
                        inputProps={{style:{color:'white'}}}
                        InputLabelProps={{style:{color:'white'}}} />
                        <TextField sx={{display: 'block', margin: '.8rem 0'}} 
                        variant='filled' label='password' type='password'
                        name='password' onChange={handleChange}
                        inputProps={{style:{color:'white'}}}
                        InputLabelProps={{style:{color:'white'}}} />
                        
                        <Button variant='contained' color='success' type='submit'>
                            Registrar
                        </Button>
                    </form>                    
                </CardContent>
            </Card>
        </Grid>

    </Grid>
  )
}

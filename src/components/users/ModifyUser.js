
import {Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'

export default function ModifyUser() {
    const navigate=useNavigate();
    const params=useParams();
    

    const loadUser = async (id) => {
       await fetch(`http://localhost:4000/users/${id}`);
        //const data=await res.json();
        
        //setUser({name:data.name, email:data.email})
    }

    useEffect(() => {
        if (params.id){
            loadUser(params.id);
        }
    },[params.id])
    
    const [user,setUser]=useState({
        name:'',
        email:''
    });

    const handleModify = async (e) =>{
        
        //e.preventDefault();
        const res = await fetch(`http://localhost:4000/users/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(user),
            headers:{'Content-Type':'application/json'}
        });
        const data= await res.json();
        navigate('/users');
    }
    

    const handleChange = e =>{
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
                    <form onSubmit={handleModify}>
                        <TextField sx={{display: 'block', margin: '.8rem 0'}} 
                        variant='filled' label='name'
                        name='name' onChange={handleChange}
                        inputProps={{style:{color:'white'}}}
                        InputLabelProps={{style:{color:'white'}}} />
                        <TextField sx={{display: 'block', margin: '.8rem 0'}} 
                        variant='filled' label='email'
                        name='email'  onChange={handleChange}
                        inputProps={{style:{color:'white'}}}
                        InputLabelProps={{style:{color:'white'}}} />
                        
                        <Button onClick={() => handleModify(user.id)} variant='contained' color='success' type='submit'>
                            Modificar
                        </Button>
                    </form>                    
                </CardContent>
            </Card>
        </Grid>

    </Grid>
  )
}

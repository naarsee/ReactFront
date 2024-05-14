import {Card, CardContent, Typography } from '@mui/material';
import {useEffect, useState} from 'react';

export default function BooksList() {

  const [books,setBooks] = useState([]);


  const loadBooks =async () => {
    const res = await fetch('http://localhost:4000/books');
    const data = await res.json();

    setBooks(data);
  }
  
  useEffect(() => {
    loadBooks();
  },[]);

  return (
    <>
      <h1> Libros </h1>
      {
        //como mostrare los libros
        books.map(books =>(
          <Card style={{marginBottom:'1rem', background:'#576b7a'}}>
            <CardContent>
              <Typography color='white'>Titulo: {books.title} </Typography>
              <Typography color='white'>Autor: {books.author} </Typography>
              <Typography color='white'>ISBN: {books.isbn} </Typography>

            </CardContent>
          </Card>

        ))
      }
    </>
    
  );
}


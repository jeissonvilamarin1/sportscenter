import React, { useState } from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import { url } from '../helpers/url';
import axios from 'axios';

const Form = () => {

    const [producto, setproducto] = useState({
        nombre: '',
        precio: '',
        categoria: '',
        imagen: ''
    })

    const handleChanged = ({ target }) => {
      setproducto({
        ...producto,
        [target.name]: target.value,
      });
    };

    const postData = () => {
      axios.post(url, producto)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    };

     const handleSubmit = (e) => {
       e.preventDefault();
     }; 

    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Nombre producto"
          color="secondary"
          name="nombre"
          onChange={handleChanged}
        />
        <TextField
          label="Precio producto"
          color="secondary"
          type="number"
          name="precio"
          onChange={handleChanged}
        />
        <TextField
          label="Categoria product"
          color="secondary"
          name="categoria"
          onChange={handleChanged}
        />
        <TextField
          label="Imagen producto URL"
          color="secondary"
          name="imagen"
          onChange={handleChanged}
        />
        <Button variant="outlined" onClick={postData}>
          Agregar producto
        </Button>
      </Box>
    );
}

export default Form

import React, { useEffect, useState } from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from 'axios';
import { url } from '../helpers/url';
import { Box } from '@mui/system';

const Hero = () => {
    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProductos()
    }, [])

    const getProductos = () => {
        axios.get(url)
        .then(response => setProducto(response.data))
        .catch(error => console.log(error))
    }


    return (
      <div>
        {producto.map((p) => (
          <Box mb={3}>
            <Card sx={{ maxWidth: 345 }} key={p.id}>
              <CardMedia
                component="img"
                height="240"
                image={p.imagen}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {p.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.nombre}
                </Typography>
                <Typography variant="h5" color="primary">
                  ${p.precio}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" variant="contained" color="success">
                  Comprar
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </div>
    );
}

export default Hero



import React from 'react';
import { CartDetail } from './CartDetail';

import { Container,Typography,Grid,Divider,Button } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from 'react-router-dom';


export const Cart = ({cart,handleUpdateCart,handleRemoveCart,handleEmptyCart}) => {



    const total = cart.total_items;
 

    if(!cart.line_items) return <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                                    <PulseLoader color='#8100BE' size={15} />
                                </Grid>; 

    return (

        <Container style={{marginTop:'150px', marginBottom:'80px'}} >
            
            <Grid container justifyContent ='space-between' alignItems='center'>
                <Typography variant="cartTitle" > Carrito de compra</Typography>

                {
                    (total > 0) && <Button  size="large" variant="cartRoboto" type="button" onClick={handleEmptyCart} color="secondary"><RemoveShoppingCartIcon sx={{fontSize:'16px'}}/> Vaciar carro  </Button>
                }
            </Grid>
            
            <br />
            <br />
            <Divider/>
            <Divider/>
            <br />
            {
                ( !cart.line_items.length )
                    ? <Typography variant="noProduct1"> No tienes productos agregados actualmente.  
                            <Typography component={Link} variant="noProduct2" to="/">
                                 Agrega aquí un producto!
                            </Typography>
                       </Typography> 
                    : <CartDetail handleUpdateCart={handleUpdateCart} handleRemoveCart={handleRemoveCart} handleEmptyCart={handleEmptyCart} cart={cart}></CartDetail>
            }


        </Container>
        
    )
}

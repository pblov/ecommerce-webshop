import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { CartItem } from './CartItem';

import useStyles from '../../styles/cartStyle';
import { Link } from 'react-router-dom';

export const CartDetail = ({cart,handleUpdateCart,handleRemoveCart,handleEmptyCart}) => {

    const classes = useStyles();

    
    
    return (
        <>
            <Grid container spacing={3} >
                {cart.line_items.map((item) => (

                    <Grid item xs={12} sm={12} key={item.id}>
                            <CartItem item={item} handleUpdateCart={handleUpdateCart} handleRemoveCart={handleRemoveCart}  handleEmptyCart={handleEmptyCart} />
                    </Grid>
                ))}
            </Grid>
            <Grid className={classes.cardDetails}>
                    <Typography  variant="cartTitle" > Subtotal:  <Typography variant="cartTitle">  {cart.subtotal.formatted_with_symbol} </Typography> </Typography>
                   
                    <div className={classes.buttonDetail}>
                        
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary"> Pagar </Button>
                    </div>
            </Grid>
        </>
    )
}

import { Container, Grid } from '@mui/material';
import React from 'react'
import { ProductCard } from './ProductCard';

import PulseLoader from "react-spinners/PulseLoader";



export const Products = ({products,handleAddToCart}) => {

    const prod = products.length;


    return (
        <Container style={{marginTop:100, marginBottom:100}}>

            {
                (!prod) 
                
                    ? <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                            <PulseLoader color='#8100BE' size={15} />
                      </Grid> 
                      
                    : <Grid container justifyContent="center" spacing={6}>
                        {
                            products.map((product) => (
        
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <ProductCard product={product} handleAddToCart={handleAddToCart} />
                                </Grid>
        
                            ))
                        }
                        
                      </Grid>
            }
            
        </Container>
    )
}

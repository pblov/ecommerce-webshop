import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import useStyles from '../../styles/productCardStyle';

export const ProductCard = ({product, handleAddToCart}) => {

    const classes = useStyles();

    const price = product.price.formatted_with_symbol;
    
    return (
        <Card className={classes.card}>
            <CardMedia  component="img" className={classes.cardImg}  image={product.image.url} title={product.image.filename}  />

            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="productName" className={classes.cardName}>
                        {product.name}
                    </Typography>
                    
                </div>
                <Typography dangerouslySetInnerHTML={{ __html:product.description }} variant="body2" color="textSecondary" className={classes.cardDescription}/>
                   

            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <Typography variant="productPrice">
                        {price}
                </Typography>
                <IconButton  color="primary" aria-label="Add to cart" onClick={() => handleAddToCart(product.id, 1)}>
                    <AddShoppingCartIcon/>
                </IconButton>
            </CardActions>


        </Card>
    )
}

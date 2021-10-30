import React from 'react';
import logo from '../../assets/logo.png';

import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import useStyles from '../../styles/navbarStyle';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = ({totalItems}) => {


    const classes = useStyles();
    const location = useLocation();

    
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="navbar" >
                <Toolbar>
                    <Typography  component={Link} to="/" variant="navbarTitle" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="50px" className={classes.image} />
                        eCommerce
                    </Typography>

                    {
                        location.pathname === '/' && 
                                <div>
                                        <div className={classes.button}>
                                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="white">
                                                <Badge badgeContent={totalItems} color="primary">
                                                    <ShoppingCart/>
                                                </Badge>
                                            </IconButton>
                                        </div>
                                </div>

                    }
                    
                </Toolbar>
            </AppBar>
        </>
    )
}


import React from 'react'
import { Typography, Grid, Paper } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useStyles from '../../styles/cartItemStyle';


export const  CartItem = ({item,handleUpdateCart,handleRemoveCart, handleEmptyCart}) => {

    const {quantity} = item;
    const classes = useStyles();

 
    return (


        
        <Paper sx={{p:2, margin:'auto', maxWidth:800, flexGrow:1, border:'1px solid #e0e0e0'}}>

            <Grid container >

                <Grid container   sx={{maxWidth:30}} >
                    <Grid container item xs={1}direction="column"  className={classes.cartCenter}>
                        <button className={classes.btnUpdate} type="button" size="small" onClick={() => handleUpdateCart(item.id, quantity + 1)} >
                            <KeyboardArrowUpIcon/>
                        </button>
                        <Typography>{item.quantity}</Typography>
                        <button className={classes.btnUpdate} type="button" size="small" onClick={() => handleUpdateCart(item.id, quantity - 1)} >
                            <KeyboardArrowDownIcon/>
                        </button>
                    </Grid>  
                </Grid>

                <Grid container direction="column" item xs={3} md={4}>
                    <Grid item xs  className={classes.cartCenter}>
                        <img className={classes.cardImg} src={item.image.url} alt={item.name} />
                    </Grid>
                    
                </Grid>

                <Grid item xs={6}  container  style={{display:'flex',alignItems:'center'}}>
                   
                        <Grid item xs={12} md={6}>
                            <Grid style={{maxWidth:145, whiteSpace:'nowrap'}}>
                                <Typography variant="cartName" component="div" sx={{textOverflow:'ellipsis',overflow:'hidden'}} >{item.name}</Typography>
                                <Typography variant="body2" sx={{textOverflow:'ellipsis',overflow:'hidden'}}> ID: {item.product_id}</Typography>
                            </Grid>
                        </Grid>

                       <Grid item xs={12} md={6}>
                            <span></span><Typography variant="cartPrice" color="primary">Precio: {item.line_total.formatted_with_symbol}</Typography>
                            <Typography variant="body2">IVA Incluido</Typography>
                        </Grid>
                  
                </Grid>

           
                    <Grid item xs={1} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button className={classes.btnDelete}>
                            <DeleteRoundedIcon onClick={() => handleRemoveCart(item.id)}/>
                        </button>
                    </Grid>  
              
                      
     
               

            </Grid>

        </Paper>
    )
}

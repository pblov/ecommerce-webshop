import React, { useEffect, useState } from 'react';
import { Container,Paper, Typography, Stepper, StepLabel,Step, CircularProgress, Divider, Button} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useStyles from '../../styles/checkoutStyle';
import { AddresForm } from './AddresForm';
import { PaymentForm } from './PaymentForm';

import { commerce } from '../../lib/commerce';

const steps = ['Dirección de envío', 'Pago'];


export const Checkout = ({cart, order, error, handleCaptureCheckout}) => {



    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        
        if (cart.id) {
            const generateToken = async () => {
              try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
      
                setCheckoutToken(token);
              } catch {
                if (activeStep !== steps.length) history.push('/');
              }
            };
      
            generateToken();
          }

    }, [cart, activeStep, history]);

    const nextStep = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); }
    const backStep = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); }


    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        },2500);
    }

    const test = (data) => {
   
 
        setShippingData(data);
        nextStep();
    }

    

    let Confirmation = () => (

        

        (order.customer) 
                        ? (<>
                                <div>
                                    <Typography variant="h5"> Gracias por su compra, {order.customer.firstname} {order.customer.lastname} </Typography>
                                    <br />
                                    <Divider className={classes.divider}/>
                                    <br />
                                    <Typography variant="subtitle2"> Order ref: {order.customer_reference}</Typography>
                                </div>
                                <br />
                                <Button component={Link} to="/" variant="outlined" type="button">Regresar al Inicio</Button>
                            </>)
                        : isFinished ? (

                                <>
                                    <div>
                                        <Typography variant="h5"> Error: {error}</Typography>
                                        <Divider className={classes.divider}/>
                                    </div>
                                    <br />
                                    <Button component={Link} to="/" variant="outlined" type="button">Regresar al Inicio</Button>
                                </>
                            
                            
                        ) : (
                        
                            <div className={classes.spinner}>
                                <CircularProgress/>
                            </div>
                        )
    );

    if(error){
        <>
            <Typography variant="h5">Error: {error} </Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    }

    
    const Form = () => (activeStep === 0 
                        ? <AddresForm checkoutToken={checkoutToken} test={test} /> 
                        : <PaymentForm handleCaptureCheckout={handleCaptureCheckout} checkoutToken={checkoutToken} shippingData={shippingData} nextStep={nextStep} backStep={backStep} timeout={timeout} />);

    return (
        <Container maxWidth='md'>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="cartCheckout" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {
                            steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>
                    {
                        activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>
                    }
                </Paper>
            </main>
        </Container>
    )
}

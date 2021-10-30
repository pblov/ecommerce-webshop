import React, { useEffect, useState } from 'react';

import { Products } from './components/products/Products';
import { Checkout } from './components/checkout/Checkout';
import { Navbar } from './components/ui/Navbar';
import { Cart } from './components/cart/Cart';

import { commerce } from './lib/commerce';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './styles/theme';




export const Ecommerce = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }

    const handleAddToCart = async (id, cant) => {
        const item = await commerce.cart.add(id,cant);
        setCart(item.cart);
    }

    const handleUpdateCart = async (id, cant) => {

        const {cart} = await commerce.cart.update(id, {quantity:cant});
        setCart(cart);
    }


    const handleRemoveCart = async (id) => {
        const {cart} = await commerce.cart.remove(id);
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }


    const handleCaptureCheckout = async (checkoutTokenId,newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId,newOrder);
            setOrder(incomingOrder);
            refreshCart();

        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

  
    const fetchCarts = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }


    useEffect(() => {
        
        fetchProducts();
        fetchCarts();

    }, []);

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar totalItems={cart.total_items}/>

                <Switch>
                    <Route exact path="/">
                       <Products products={products} handleAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} handleUpdateCart={handleUpdateCart} handleRemoveCart={handleRemoveCart} handleEmptyCart={handleEmptyCart} />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart} order={order} handleCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                    </Route>
                </Switch>       

            </ThemeProvider>
        </Router>
        
    )
}

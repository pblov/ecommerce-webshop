import React, { useEffect, useState } from 'react';

import { FormInput } from './FormInput';

import { commerce } from '../../lib/commerce';
import { InputLabel, Select, MenuItem, Button, Grid, Typography,FormControl } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';


export const AddresForm = ({checkoutToken, test}) => {

    

    const methods = useForm();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const countries =  Object.entries(shippingCountries).map(([code,name]) => ({id:code, label:name}));
    const subdivisions =  Object.entries(shippingSubdivisions).map(([code,name]) => ({id:code, label:name}));
    const options = shippingOptions.map((shippOp) => ({id: shippOp.id, label: `${shippOp.description} - (${shippOp.price.formatted_with_symbol})`}))

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        //Crea un array con [CL,AR] (dos paises de COMMERCE JS agregados).
        setShippingCountry(Object.keys(countries)[0]);
    }
    

    const fetchSubdivisions = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});
        setShippingOptions(options);
        setShippingOption(options[0].id);
    }


    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, [checkoutToken.id]);

    useEffect(() => {
        if(shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
         if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision,shippingCountry,checkoutToken.id]);

    const handleChangeCountry = (e) => {
        setShippingCountry(e.target.value);
    }

    const handleSubdivision = (e) => {
        setShippingSubdivision(e.target.value);
    }

    const handleOption = (e) => {
        setShippingOption(e.target.value);
    }





 

    return (
        <>
            <Typography variant="h6" gutterBottom> Detalle de despacho</Typography>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                    <Grid container spacing={3} >
                        <FormInput required name="firstName" label='Nombre'/>
                        <FormInput required name="lastName" label='Apellido'/>
                        <FormInput required name="address1" label='Dirección'/>
                        <FormInput required name="email" label='Email'/>
                        <FormInput required name="city" label='Ciudad'/>
                        <FormInput required name="zip" label='ZIP/Código postal'/>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth >
                                <InputLabel>País</InputLabel>
                                
                                <Select  value={shippingCountry} autoWidth label="País" onChange={(e) => handleChangeCountry(e)}>
                                
                                    {
                                    
 
                                        countries.map((country) => (
                                            <MenuItem key={country.id} value={country.id}>
                                                {country.label}
                                            </MenuItem>
                                        ))
                                    }
                                   
                                </Select>
                            </FormControl>
                            
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                            <InputLabel>Región</InputLabel>
                            <Select  value={shippingSubdivision} autoWidth label="Región" onChange={(e) => handleSubdivision(e)}>
                                
                                    {
                                        subdivisions.map((subdivision) => (
                                            <MenuItem key={subdivision.id} value={subdivision.id}>
                                                {subdivision.label}
                                            </MenuItem>
                                        ))
                                    }
                                   
                            </Select>

                            </FormControl>
                            
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth readOnly>
                                <InputLabel>Tarifa</InputLabel>
                                <Select  value={shippingOption} autoWidth label="Tarifa" onChange={(e) => handleOption(e)}>
                                    
                                        {
                                            options.map((option) => (
                                                <MenuItem key={option.id} value={option.id}>
                                                    {option.label}
                                                </MenuItem>
                                            ))
                                        }
                                </Select>

                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                        
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button variant="contained" to="/cart" component={Link}>Volver al carro</Button>
                            <Button type="submit" variant="contained" > Siguiente </Button>
                        </div>
                        </Grid>
                       


                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

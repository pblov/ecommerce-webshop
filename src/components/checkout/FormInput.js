import React from 'react';

import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

export const FormInput = ({name,label}) => {

    const {control} = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller 
        
                control={control}
                name={name}
                render = {( {field:{onChange} } ) => (
                    <TextField
                    defaultValue=""
                    onChange={onChange}
                    fullWidth
                    label={label}
                    required
                />
                )}
            />

            
        </Grid>
    )
}

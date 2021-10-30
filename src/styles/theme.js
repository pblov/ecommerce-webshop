import { createTheme } from '@mui/material/styles';
import { deepPurple, lightBlue,grey } from '@mui/material/colors';

const theme = createTheme({

    
    typography: {
       productName:{
            fontFamily: ['"Raleway", sans-serif'],
            fontSize:'16px',
            textTransform:'uppercase',
            fontWeight:700
       },

       body2:{
           fontFamily: ['"Roboto", sans-serif'],
           fontSize:'14px',
           fontWeight:400
       },
       
       productPrice:{
            fontFamily: ['"Roboto", sans-serif'],
            fontWeight:700,
            fontSize:'22px'
       },

       cartName:{
            fontFamily: ['"Raleway", sans-serif'],
            fontSize:'14px',
            textTransform:'uppercase',
            fontWeight:700
       },
       cartPrice:{
            fontFamily: ['"Roboto", sans-serif'],
            fontSize:'16px',
            textTransform:'uppercase',
            fontWeight:900
       },
       cartTitle:{
            fontFamily: ['"Roboto", sans-serif'],
            fontSize:'32px',
            textTransform:'uppercase',
            fontWeight:600
       },
       cartRoboto:{
            fontFamily: ['"Roboto", sans-serif'],
       },
       cartCheckout:{
          fontFamily: ['"Roboto", sans-serif'],
          fontSize:'26px',
          display:'flex',
          justifyContent:'center',
          textTransform:'uppercase',
          fontWeight:800
       },
       noProduct1:{
          fontFamily: ['"Roboto", sans-serif'],
          
       },
       noProduct2:{
          fontFamily: ['"Roboto", sans-serif'],
          textDecoration:'none !important',
          color:'#311b92',
          fontWeight:900,
          textTransform:'uppercase'
       },

       navbarTitle:{
          fontFamily: ['"Raleway", sans-serif'],
          textDecoration:'none !important',
          color:"white",
          fontWeight:700,
          fontSize:'18px'
       }

    },


    palette:{
        primary:{
            main: lightBlue[600],
        },
        secondary:{
            main: deepPurple[600],
        },
        navbar:{
             main: grey[900]
        },
        white:{
             main: "#FFF"
        }
    }
});

export default theme;
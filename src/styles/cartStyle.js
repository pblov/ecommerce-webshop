import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('md')]: {
      marginBottom:'15px !important',
      width:'100%'
    },
    [theme.breakpoints.up('md')]: {
      marginRight: '20px !important',
    },
  
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '3%',
    width: '100%',
    justifyContent: 'space-between',
    
  },


}));
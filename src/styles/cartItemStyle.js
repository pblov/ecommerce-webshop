import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({
  cardImg:{
    margin:'auto',
        display:'block',
        width:'75px',
        height:'75px',
},
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    paddingLeft:'16px !important',
    paddingRight:'16px !important',
    justifyContent: 'space-between',
  },
  btnUpdate:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    cursor:'pointer',
    color:'rgba(0, 0, 0, 0.6)',
    '&:hover':{
      color:'#039be5',
      transition:'.5s all ease-in-out',
      transform:'scale(1.1)'
    }
  },
  btnDelete:{
    backgroundColor:'transparent',
    border:'transparent',
    borderRadius:'50%',
    color:'rgba(0, 0, 0, 0.6)',
    padding:'5px',
    cursor:'pointer',
    '&:hover':{
      padding:'8px',
      backgroundColor:'#b71c1c',
      color:'white',
      transition:'.5s all ease-in-out',
    }
  },
  cartCenter:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
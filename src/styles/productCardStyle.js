import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({


    card:{
        maxWidth:'100%',
        maxHeight:'500px',
        width:'100%'

    },
    cardImg:{
        padding:'15px',
        height:'200px',

    },
    cardName:{
        fontWeight:'900'
    },
    cardDescription:{
        maxWidth: 200,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
    ,
    cardActions: {
        padding:'16px !important',
        display:'flex',
        justifyContent:'space-between',
    },
    cardContent:{
        
        display:'flex',
        justifyContent:'space-between'
    },
  

}));

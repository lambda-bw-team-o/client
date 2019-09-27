import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import { StepContent } from '@material-ui/core';
import axiosWithAuth from '../helpers/axiosWithAuth'
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 200,
      height: 200,
      margin: '0 auto',
      backgroundColor: "grey",
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,2,4,7),
    },
    textField: {
      fontColor:"white"
    },
    button:{
    marginTop:"15px",
    marginLeft:"42px",
    color:"white"
    },
    button1:{
        color:"black",
        },
    multilineColor:{
        color:'white'
    }
  }));

  const styles = theme => ({
    
});



export default function ChatModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState({
      message:""
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const onSubmitHandler = async e => {
    e.preventDefault();
    let posted = await axiosWithAuth()
        .post('https://team-o.herokuapp.com/api/adv/say/', {message})
        .then(res => {
           
            handleClose()
        })
        .catch(err => {
            console.log(err);
        });
};


  const handleChange = name => event => {
    setMessage({ ...message, [name]: event.target.value });
    console.log(message)
};


  return (
    <div>
     

      <Button
        size="large"
        // color="primary"
        className={classes.button1}
        variant="contained"
        onClick={handleOpen}>
        chat
        </Button>
       
    
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div  className={classes.paper}>
        <TextField
        style={{margin: '0 -20px'}}
        id="filled-multiline-static"
        label="chat"
        multiline
        rows="7"
        className={classes.textField}
        margin="none"
        value={message.message}
        variant="filled"
        name="message"
        onChange={handleChange("message")}
        InputProps={{
            className: classes.multilineColor
          }}
      /><br/>
        <Button
        size="small"
        color="primary"
        className={classes.button}
        onClick={onSubmitHandler}
        variant="outlined">
        submit
        </Button>
        </div>
      
      </Modal>
     
    </div>
  );
}


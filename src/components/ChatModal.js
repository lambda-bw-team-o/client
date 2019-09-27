import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'relative',
      width: 200,
      height: 200,
      backgroundColor: "black",
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    textField: {
    //   marginLeft: theme.spacing(1),
    //   marginRight: theme.spacing(1),
      color:"white"
    },
    button:{
    marginTop:"15px"
    }
  }));
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



export default function ChatModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const onSubmitHandler = async e => {
    // e.preventDefault();

    // let posted = await axios
    //     .post(`/invoices/case/${props.caseId}`, form)
    //     .then(res => {
    //         console.log("create invoice: ", res.data);
    //         if (process.env.NODE_ENV === "production") {
    //             mixpanel.track("Create invoice", {
    //                 distinct_id: localStorage.getItem("id")
    //             });
    //         }
    //         handleOpen();
    //     })
    //     .catch(err => {
    //         console.error(err.response);
    //         handleErrorOpen();
    //     });
};

  return (
    <div>
     

      <Button
        size="small"
        color="primary"
        className={classes.button}
        onClick={onSubmitHandler}
        variant="outlined"
        onClick={handleOpen}>
        chat
        </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
        <TextField
        style={{margin: '0 -20px'}}
        id="filled-multiline-static"
        label="chat"
        multiline
        rows="7"
        className={classes.textField}
        margin="none"
        variant="filled"
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


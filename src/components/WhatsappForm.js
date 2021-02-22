import React, { useState, useEffect, Fragment } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Send a Message', 'Register your Number'];
}



const WhatsappForm = () => {
  const [formData, setFormData] = useState("");

  const saveNo = () => {
    fetch("http://127.0.0.1:8000/subscribers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: formData, // Use your own property name / key
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          console.error();
        }
      })
      .catch(function (error) {
        console.error('more problem');
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };



  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveNo(); // Save games when form is submitted
    setFormData("");
    handleNext();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <p>To begin testing, connect to your sandbox by sending a WhatsApp message from your device to <b>+1 415 523 8886</b> with code <b>join heavy-softly</b>. If WhatsApp is installed on this device, you can <a href='https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+heavy-softly&app_absent=0' target="_blank">click here</a>.</p>
      case 1:
        return <p>Enter your 10-digits WhatsApp number.
          <TextField
              autoFocus
              margin="dense"
              name="phone"
              onChange={handleChange}
              value={formData}
              placeholder="10-digit WhatsApp no."
              fullWidth
            />
        </p>
      default:
        return 'Unknown step';
    }
  }


  return (
    

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
<Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                    {activeStep === steps.length - 1 ?                   
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}>Submit</Button>
                    : 
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}>Next</Button>
                    }
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Button onClick={handleReset} className={classes.button}>
            Add another number
          </Button>
        </Paper>
      )}
      </Dialog>
  );
};

export default WhatsappForm;

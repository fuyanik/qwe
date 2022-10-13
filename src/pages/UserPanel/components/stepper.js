import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./stepper.css";


import { StepIcon } from '@mui/material';

const steps = [
  {
    label: "Recheck requested and payment authorized",
    description: ``
  },
  {
    label: "Medical images obtained",
    description: `It usually takes up to 10 days to acquire your medical images. If you have access, you may choose to upload yourself.`
  },

  {
    label: "Artificial intelligence evaluation is completed",
    description: ``
  },
  {
    label: "Radiologist 1 evaluation is completed",
    description: ``
  },
  {
    label: "Radiologist 2 evaluation is completed",
    description: ``
  },
  {
    label: "Recheck completed",
    description: ``
  }
];

export default function VerticalLinearStepper({activeStep1}) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

 
  return (
    <Box  className="stepper-box" >
      <StepIcon/>
      {/*Whichever number your Active Step is, that index is active. acitvestep == 2 ise 2.sıradaki yanar  */}
      <Stepper
        sx={{ display:"flex",backgroundColor: "white", color: "black" }}
        activeStep={activeStep1}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step  
          sx={{marginTop:"-10px"}}
          icon="" key={step.label}>
            
            <StepLabel
              optional={
                index === 5 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              
              <Typography sx={{marginTop:"3.4px",fontFamily: "Sofia Pro", fontSize:"14px", color: "black", fontWeight:"600", letterSpacing: "-1px" }}>{step.label}</Typography>
            </StepLabel>
            
            <StepContent>
              <Typography sx={{fontFamily: "Sofia Pro", fontSize:"13px" }} >{step.description}</Typography>
              {/* In which index we want to show content specifically, we can do it with the ternary operator.*/}
              {index === 1 &&  <div className="stepper-upload-image"> Upload Image</div>}
              {index === 0 && <div className="stepper-upload-image"> Payment</div>}

              <Box sx={{ mb: 2 }}>
                <div></div>
              </Box>
            </StepContent>
         
          </Step>
        ))}

      </Stepper>
      
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

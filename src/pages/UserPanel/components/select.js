import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { collection, addDoc,setDoc,doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth"; 
import { db } from "../../../firebase";

export default function SelectLabels() {
  
  let remindDay = 1;
  const[value,setValue] = useState(1);

  const auth = getAuth();
  const user = auth.currentUser;


  const handleChange = async (e) => {
        setValue(e.target.value);
        remindDay = e.target.value;
        console.log(remindDay)
    
   
     const cityRef = doc(db, "VitamuUsersREAL", `${user.email}`);

     setDoc(cityRef,
       { remindDay: remindDay }, 
       { merge: true }
       );

   
  }

  const days = [];

  for (let i = 1; i < 32; i++) {

      days.push( <MenuItem value={i}>{i}</MenuItem>);
  
    }


    
  return (
    <div className="select-button1">
     

      <FormControl
        sx={{

          alignItems: "center",
          border: "1px solid black",
          width:"70px", 
          backgroundColor: "#F0F0F0",
          borderRadius: 8,

        }}
      >
        <Select
          sx={{
            paddingTop: "1.5px",
            fontFamily: "'Sofia Pro'",
            width: "70px",
            height: "22px",
            color: "black",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: "15.7px",
            fontWeight: "400",

          }}
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
         
         
<MenuItem
style={{width:"180px"}}
            disabled value="">
            <em className="select-panel-3">Remind  me  day</em>
        </MenuItem>

        {days}
       
     
      

         
          
          
        </Select>
      </FormControl>
    </div>
  );
}

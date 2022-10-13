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

export default function SelectLabels2() {

  const auth = getAuth();
  const user = auth.currentUser;
  
  let remindedByUser = "";

  const [value, setValue] = useState("")

  const handleChange = (e) => {

    setValue(e.target.value);
    remindedByUser = e.target.value;

    const cityRef = doc(db, "VitamuUsersREAL", `${user.email}`);

    setDoc(cityRef,
      { remindedBy: remindedByUser }, 
      { merge: true }
      );
  
  }


  const remindedBy = ["Email", "SMS", "Both"];

  return (
    <div className="select-button2">
      <h2></h2>
      <FormControl
        sx={{
           
         
          alignItems: "center",
          border: "1px solid black",
          width:"110px",
          backgroundColor: "#F0F0F0",
          borderRadius: 8,
        }}
      >
        <Select
          sx={{
            paddingLeft: "2px",
            fontFamily: "'Sofia Pro'",
            width: "110px",
            height: "22px",
            color: "black",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: "16px",
          }}
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
           <MenuItem
            disabled value="">
            <em className="select-panel-3">Reminded by</em>
        </MenuItem>
        {remindedBy.map((reminded, index) => {
          return (
            <MenuItem value={reminded} key={index}>{reminded}</MenuItem>
          );
        })}
         
        </Select>
      </FormControl>
    </div>
  );
}

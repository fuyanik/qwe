import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {auth} from "../../../firebase"
import { useNavigate } from "react-router-dom";
import "./login.css"
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
       {email == "mustafa@vitamu.com" ? navigate("/panel") :  navigate("/user-panel") }  
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };
  return (
    <div className="login-page"
    
    >
     
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="nameİnput"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
<ToastContainer/>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="nameİnput"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <button style={{
        backgroundColor:"#00bcd4",width:200,height:50,marginLeft:100, marginTop:-250, borderRadius:10
      }}  onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
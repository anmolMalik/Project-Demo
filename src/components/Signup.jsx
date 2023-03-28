import React, { useState} from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {toast} from "react-toastify"

import InputControl from "./InputControl";
import { auth } from "../firebase";


import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

 

  const handleSubmission = async(e) => {
    e.preventDefault()
    const{name,email,pass}=values;
    const res=await fetch('https://gym-ui-7f99f-default-rtdb.firebaseio.com/anmolform.json',
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,
            email,
            pass,
        })

    })
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        toast.success("Signup Successfully");
        navigate("/login")
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
       ;
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Welcome To The Fit Club</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues( ({ ...values, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues( ({ ...values, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues( ({ ...values, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
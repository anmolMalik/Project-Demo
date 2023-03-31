import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "./InputControl";
import { auth } from "../firebase";
import styles from "./Login.module.css";


function TrainerLogin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);

                navigate("/userdash");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };
    return (
        <div className={styles.container1}>
            <div className={styles.container}>
                <div className={styles.innerBox}>
                    <h1 className={styles.heading}>Trainers Portal</h1>

                    <InputControl
                        label="Email"
                        onChange={(event) =>
                            setValues(({ ...values, email: event.target.value }))
                        }
                        placeholder="Enter email address"
                    />
                    <InputControl
                        label="Password"
                        onChange={(event) =>
                            setValues(({ ...values, pass: event.target.value }))
                        }
                        placeholder="Enter Password"
                    />

                    <div className={styles.footer}>
                        <b className={styles.error}>{errorMsg}</b>
                        <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                            Login
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default TrainerLogin;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify"
import InputControl from "./InputControl";
import { auth } from "../firebase";
import styles from "./Login.module.css";


function Login() {
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
                toast.success("Login Successfully");
                navigate("/admin-dashboard");
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
                    <h1 className={styles.heading}>Welcome Onboard</h1>

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
                        <p>
                            Don't have an account?{" "}
                            <span>
                                <Link to="/signup">Sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;
import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import './View.css'
import { useParams, Link } from "react-router-dom";



const View = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fireDb.child(`anmolform/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setUser({ ...snapshot.val() });
            } else {
                setUser({});
            }
        })
    }, [id]);

    return (
        <>
            
            <div style={{ marginTop: "150px" }}>
                <div className="card">
                    <div className="card-header">
                        <p>User Details</p>
                    </div>
                    <div className="card-container">
                        <strong>ID: </strong>
                        <span>{id}</span>
                        <br />
                        <br />
                        <strong>Name: </strong>
                        <span>{user.name}</span>
                        <br />
                        <br />
                        <strong>Email: </strong>
                        <span>{user.email}</span>
                        <br />
                        <br />
                        <Link to="/userdash">
                            <button className='btn btn-edit'>Go Back</button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default View

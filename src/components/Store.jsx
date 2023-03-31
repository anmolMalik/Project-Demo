import React, { useEffect, useState } from 'react'
import fireDb from '../firebase'
import { Link } from 'react-router-dom'
import './Store.css'


const Store = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        fireDb.child("anmolform").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        }
    }, []);
    const onDelete = (id)=>{
        if(window.confirm("Are you sure you want to delete?")){
            fireDb.child(`anmolform/${id}`).remove((err)=>{
                if(err){
                    alert('Error');
                }else{
                    alert('Deleted Successfully');
                }
            })
        }
    }

    return (
        <div style={{ marginTop: "100px" }}>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>S.No</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Email</th>
                        {/* <th style={{ textAlign: "center" }}>Pass</th> */}
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                {/* <td>{data[id].pass}</td> */}
                                <td>
                                 
                                    <button className='btn btn-delete' onClick={()=> onDelete(id)}> Delete</button>
                                    <Link to={`/view/${id}`}>
                                        <button className='btn btn-'>View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Store

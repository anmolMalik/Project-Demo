
import user from '../assets/user.png'
import './UserHead.css'
import React, { useEffect, useState } from 'react'
import fireDb from '../firebase'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PieChart from './PieChart'


const UserHead = () => {
  const navigate = useNavigate()

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
  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fireDb.child(`anmolform/${id}`).remove((err) => {
        if (err) {
          alert('Error');
        } else {
          alert('Deleted Successfully');
        }
      })
    }
  }
  return (
 
    <div className="container1">
      <div className="topbar1">
        <div className="logo">
          <h1>TheFitClub</h1>
        </div>
        <div className="search">
          <input type="text" id="search" placeholder="search here" />
          <label htmlFor="search"><i className="ri-search-line"></i></label>
        </div>
        <i class="ri-notification-3-fill"></i>
        <div className="user1">
          <img src={user} alt="" onClick={() => navigate('/')} />
        </div>
      </div>
      <div className="sidebar1">
        <ul>
          <li>
            <a href="#">
              <i className="ri-dashboard-fill"></i>
              <div>DashBoard</div>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-shopping-cart-line"></i>
              <div>Products</div>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-phone-fill"></i>
              <div>Contact Us</div>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-logout-circle-line"></i>
              <div >Logout</div>
            </a>
          </li>
        </ul>
      </div>
      <div className="main1">
        <div className="cards">
          <div className="card">
            <div className="card-content">
              <div className="number">350+</div>
              <div className="card-name"> Members</div>
            </div>
            <div className="icon-box">
              <i className="ri-user-fill"></i>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="number">20+</div>
              <div className="card-name">Trainers</div>
            </div>
            <div className="icon-box">
              <i className="ri-user-fill"></i>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="number">40+</div>
              <div className="card-name">Products</div>
            </div>
            <div className="icon-box">
              <i className="ri-shopping-cart-line"></i>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="chart">

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

                        <button className='btn btn-delete' onClick={() => onDelete(id)}> Delete</button>
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
          <div className="chart" id="doughnut-chart">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default UserHead

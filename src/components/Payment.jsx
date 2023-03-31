import React from 'react'
import './Payment.css'
import cardImage from '../assets/card_img.png'

const Payment = () => {
  return (
    <div className="container">

    <form action="">

        <div className="row">

            <div className="col">

                <h3 className="title">Billing Address</h3>

                <div className="inputBox">
                    <span>Full Name :</span>
                    <input type="text" placeholder="john deo"/>
                </div>
                <div className="inputBox">
                    <span>Email :</span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div className="inputBox">
                    <span>Address :</span>
                    <input type="text" placeholder="room - street - locality"/>
                </div>
                <div className="inputBox">
                    <span>City :</span>
                    <input type="text" placeholder="mumbai"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>State :</span>
                        <input type="text" placeholder="india"/>
                    </div>
                    <div className="inputBox">
                        <span>Zip code :</span>
                        <input type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div>

            <div className="col">

                <h3 className="title">Payment</h3>

                <div className="inputBox">
                    <span>Cards Accepted :</span>
                    <img src={cardImage} alt=""/>
                </div>
                <div className="inputBox">
                    <span>Name On Card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                </div>
                <div className="inputBox">
                    <span>Credit Card Number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="inputBox">
                    <span>Exp Month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>Exp Year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div className="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" className="submit-btn"/>

    </form>

</div>    
    
  )
}

export default Payment

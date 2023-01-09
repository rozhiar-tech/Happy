import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/AfterPayment.css";

const  Afterpayment = () => {
    const navigate1 = useNavigate()
    return(
        <div className="afterpayment">
            <div className="text">
        <h1 className="text1">Thank You!</h1>
        <h5 className="text2">You purchase has been submitted, you should receive an email with the receipt soon.</h5>
            </div>
            <button id="button1" type="submit" className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded px-4 py-2" onClick={() => navigate1("/")}>BACK TO HOME</button>
        
        </div>

    )
}

export default Afterpayment;
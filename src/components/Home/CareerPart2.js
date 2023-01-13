import React from "react";
import Data from "./JobsData.json";
import "../styles/careersection.css";

const CareerPart2 = () => {
    return(
        <div className="div">
            <h1 className="header">current open positions</h1>
            <h3 className="h3">Please send us an email with the application title as the subject with an attached CV in PDF format!</h3>
            <table className="sm:justify-center ml-[2%]">
           {
            
            Data && Data.map( record => {
                return(
                    <div className="sm:justify-center">
                    <tr key={record.id}>
                    <td className="text-blue-600 ml-0 w-5/6">
                    <strong>{record.jobTitle}</strong>
                    </td>
                    <td className="text-blue-600 w-1/6">{record.department}</td>
                    </tr>
                    <tr>
                    <td className="w-5/6">
                    {record.jobDescription}
                    </td>
                    <td className="w-1/6">{record.type}</td>
                    </tr>
                    <hr/>

                    </div>
                )
            })
           }
           </table>
        </div>
    );
}
export default CareerPart2;
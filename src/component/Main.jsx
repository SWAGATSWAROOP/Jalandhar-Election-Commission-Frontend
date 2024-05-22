import '../style/main.css';
import React from 'react';
function Main() {
    return (
        <>
            <div className="assembly-container">
                <div className="tabs">
                    <button className="tab">By Assembly/ Constituencies (General)</button>
                    <button className="tab">By Assembly/ Constituencies & Polling Station Details</button>
                    <button className="tab">By Assembly/ Constituencies & Polling Station Number</button>
                </div>
                <div className="form-container">
                    <select className="dropdown">
                        <option>Select AC Detail</option>
                        {/* Dropdown options would be populated here */}
                    </select>
                    <button className="submit-button">Submit</button>
                </div>
            </div>
        </>
    )
}
export default Main;
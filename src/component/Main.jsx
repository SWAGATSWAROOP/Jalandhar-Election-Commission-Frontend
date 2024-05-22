import '../style/main.css';
import Assembly from './Assembly';
import BoothNumber from './BoothNumber';
import React, {useState } from 'react';
function Main() {
    const [part, setPart] = useState(1);
    return (
        <>
            <div className="assembly-container">
                <div className="tabs">
                    <button className="tab" onClick = {() => setPart(1)}>By Assembly/ Constituencies (General)</button>
                    {/* <button className="tab" onClick = {() => setPart(2)}>By Assembly/ Constituencies & Polling Station Details</button> */}
                    <button className="tab" onClick = {() => setPart(2)}>By Assembly/ Constituencies & Polling Station Number</button>
                </div>
                <div className="form-container">
                    {part == 1 && <Assembly/>}
                    {part == 2 && <BoothNumber/>} 
                </div>
            </div>
        </>
    )
}
export default Main;
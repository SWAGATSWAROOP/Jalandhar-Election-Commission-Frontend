import React, { useState } from 'react';
import '../style/boothnumber.css';

function BoothNumber({ assembliesData }) {
    const [partNumber, setPartNumber] = useState("");
    const [boothData, setBoothData] = useState(null);

    const assemblies = [
        { id: 30, name: "Phillaur/ਫਿਲੌਰ" },
        { id: 31, name: "Nakodar/ਨਕੋਦਰ" },
        { id: 32, name: "Shahkot/ਸ਼ਾਹਕੋਟ" },
        { id: 33, name: "Kartarpur/ਕਰਤਾਰਪੁਰ" },
        { id: 34, name: "Jalandhar West/ਜਲੰਧਰ ਪੱਛਮੀ" },
        { id: 35, name: "Jalandhar Center/ਜਲੰਧਰ ਕੇਂਦਰ" },
        { id: 36, name: "Jalandhar North/ਜਲੰਧਰ ਉੱਤਰੀ" },
        { id: 37, name: "Jalandhar Cantt/ਜਲੰਧਰ ਛਾਉਣੀ" },
        { id: 38, name: "Adampur/ਆਦਮਪੁਰ" }
    ];

    const handleSubmit = () => {
        const selectedName = document.querySelector(".dropdown").value;
        if (selectedName && partNumber) {
            console.log("Selected Assembly : ", selectedName);
            console.log("Booth number :", partNumber);
            const assembly = assembliesData.filter(place => place.location === selectedName).find(place => place.boothid == partNumber);

            if (assembly) {
                console.log(assembly);
                setBoothData(assembly);
            } else {
                console.log("Booth data is null");
                setBoothData(null);
            }
        }
    };

    return (
        <>
            <div className="form-container">
                <select className="dropdown">
                    <option value="">Select your Assembly/Constituency</option>
                    {assemblies.map(assembly => (
                        <option key={assembly.id} value={assembly.name}>
                            {assembly.id} - {assembly.name}
                        </option>
                    ))}
                </select>
                <input
                    className="dropdown"
                    type="number"
                    placeholder="Enter your Part Number"
                    value={partNumber}
                    onChange={(e) => setPartNumber(e.target.value)}
                />
                <button className="submit-button" onClick={()=>handleSubmit()}>Submit</button>
            </div>
            {boothData && (
                <table>
                    <thead>
                        <tr>
                            <th>Part Number</th>
                            <th>Assembly/Constituency</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{boothData.boothid}</td>
                            <td>{boothData.location}</td>
                            {/* <td>{data.rush}</td> */}
                            {/* <td>{data.time}</td> */}
                            {/* <td>{data.location}</td> */}
                            <td><button onClick={() => window.open(`${boothData.url}`, '_blank')}>Click here</button></td>
                        </tr>
                    </tbody>

                </table>)}
        </>
    );
}

export default BoothNumber;

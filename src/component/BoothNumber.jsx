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
            const assembly = assembliesData.filter(place => place.location === selectedName).find(place => place.boothid == partNumber);

            if (assembly) {
                console.log(assembly);
                setBoothData(assembly);
            } else { 
                alert('Please Enter the valid Part Number');
                setPartNumber("");
                setBoothData(null);
            }
        }
    };

    return (
        <>
            <div className="form-container">
                <select className="dropdown">
                    <option value="">Select Assembly Constituency /ਵਿਧਾਨ ਸਭਾ ਹਲਕਾ ਚੁਣੋ</option>
                    {assemblies.map(assembly => (
                        <option key={assembly.id} value={assembly.name}>
                            {assembly.id} - {assembly.name}
                        </option>
                    ))}
                </select>
                <input
                    className="dropdown"
                    type="number"
                    placeholder="Enter your Part Number/ਆਪਣਾ ਭਾਗ ਨੰਬਰ ਦਰਜ ਕਰੋ"
                    value={partNumber}
                    onChange={(e) => setPartNumber(e.target.value)}
                />
                <button className="submit-button" onClick={()=>handleSubmit()}>Submit</button>
            </div>
            {boothData && (
                <table className='table-container'>
                    <thead>
                        <tr>
                            <th>Part Number/ਭਾਗ ਨੰਬਰ</th>
                                {/* <th>Assembly/Constituency</th> */}
                                <th>Rush/ਭੀੜ</th>
                                <th>Last Update/ਆਖਰੀ ਤਬਦੀਲੀ</th>
                                <th>Location/ਟਿਕਾਣਾ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{boothData.boothid}</td>
                            {/* <td>{boothData.location}</td> */}
                            <td>{boothData.rush}</td>
                            <td>{boothData.time}</td> 
                            <td><button  className="location-tab" onClick={() => window.open(`${boothData.url}`, '_blank')}>Click here</button></td>
                        </tr>
                    </tbody>

                </table>)}
        </>
    );
}

export default BoothNumber;

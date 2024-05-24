import React, { useState } from 'react';
import '../style/assembly.css';

function Assembly({ assembliesData }) {
    const [filteredData, setFilteredData] = useState([]);

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
        if (selectedName) {
            // setSelectedAssembly(selectedName);
            const filtered = assembliesData.filter(place => place.location === selectedName);
            setFilteredData(filtered);
        }
    };

    return (
        <>
            <div className="form-container"> 
                <select className="dropdown" required>
                    <option value="">Select your Assembly/Constituency</option>
                    {assemblies.map(assembly => (
                        <option key={assembly.id} value={assembly.name}>
                            {assembly.id} - {assembly.name}
                        </option>
                    ))}
                </select>
                <button className="submit-button" onClick={() =>handleSubmit()}>Submit</button>
            </div>
            {filteredData && filteredData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Part Number</th>
                            <th>Assembly/Constituency</th>
                            {/* <th>Location Rush</th> */}
                            {/* <th>Last Updated Time</th> */}
                            <th>Location</th>
                            {/* <th>Details</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.boothid}</td>
                                <td>{data.location}</td>
                                {/* <td>{data.rush}</td> */}
                                {/* <td>{data.time}</td> */}
                                {/* <td>{data.location}</td> */}
                                <td><button onClick={() => window.open(`${data.url}`, '_blank')}>Click here</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Assembly;

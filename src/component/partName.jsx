import React, { useState, useEffect } from 'react'; 
import '../style/partname.css';

function PartName({ assembliesData }) {
    const [partName, setPartName] = useState("");
    const [selectedAssembly, setSelectedAssembly] = useState("");
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

    const handleAssemblyChange = (event) => {
        const selectedName = event.target.value;
        setSelectedAssembly(selectedName);
        setPartName("");
        if (selectedName) {
            const assemblyData = assembliesData.filter(place => place.location === selectedName);
            setFilteredData(assemblyData);
        } else {
            setFilteredData([]);
        }
    };

    const handlePartNameChange = (event) => {
        const partName = event.target.value;
        setPartName(partName); 
    };
    useEffect(() => {
        if (selectedAssembly) {
            let assemblyData = assembliesData.filter(place => place.location === selectedAssembly);
            if (partName) {
                assemblyData = assemblyData.filter(place => place.boothid.toString().includes(partName));
            }
            setFilteredData(assemblyData);
        }
    }, [selectedAssembly, partName, assembliesData]);

    return (
        <>
            <div className="form-container">
                <select className="dropdown" value={selectedAssembly} onChange={handleAssemblyChange}>
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
                    placeholder="Enter your Part Name/ਆਪਣਾ ਭਾਗ ਨਾਮ ਦਰਜ ਕਰੋ"
                    value={partName}
                    onChange={handlePartNameChange}
                />
            </div>
            {filteredData.length > 0 && (
                <table className='table-container'>
                    <thead>
                        <tr>
                            <th>Part Number/ਭਾਗ ਨੰਬਰ</th>
                            <th>
                                <div>Rush/ਭੀੜ</div>
                                <div>Last Update/ਆਖਰੀ ਤਬਦੀਲੀ</div>
                            </th>
                            <th>Location Name/ਟਿਕਾਣਾ ਦਾ ਨਾਮ</th>
                            <th>Location/ਟਿਕਾਣਾ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((boothData, index) => (
                            <tr key={index}>
                                <td>{boothData.boothid}</td>
                                <td>
                                    <div style={{textAlign: 'center'}}>
                                        <div>{boothData.rush}</div>
                                        <hr />
                                        <div>{boothData.time}</div>
                                    </div>
                                </td>
                                <td>
                                    <div style={{textAlign: 'center'}}>
                                        <div>{boothData.partname}</div>
                                        <hr />
                                        <div>{boothData.partnamepb}</div>
                                    </div>
                                </td>
                                <td><button className="location-tab" onClick={() => window.open(`${boothData.url}`, '_blank')}>Click here</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )} 
        </>
    );
}

export default PartName;

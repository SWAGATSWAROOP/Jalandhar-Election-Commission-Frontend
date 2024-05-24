import React, { useState } from 'react';
import '../style/assembly.css';

function Assembly({ assembliesData }) {
    const [selectedAssembly, setSelectedAssembly] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8); // Default page size

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
            const filtered = assembliesData.filter(place => place.location === selectedName);
            setFilteredData(filtered);
            setCurrentPage(1); // Reset current page to 1 when new data is filtered
        }
    };

    const handlePageSizeChange = (e) => {
        const newSize = parseInt(e.target.value);
        if (!isNaN(newSize)) {
            setPageSize(newSize);
        }
    };

    const totalPages = Math.ceil(filteredData.length / pageSize);
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
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
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
            {filteredData && filteredData.length > 0 && (
                <>
                    <table className='table-container'>
                        <thead>
                            <tr>
                                <th>Part Number</th>
                                <th>Assembly/Constituency</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.boothid}</td>
                                    <td>{data.location}</td>
                                    <td><button className="location-tab" onClick={() => window.open(`${data.url}`, '_blank')}>Click here</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button disabled={currentPage === 1} onClick={handlePrevPage}> &laquo;Previous</button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button key={index} className={currentPage === index + 1 ? "active" : ""} onClick={() => handleClick(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                        <button disabled={currentPage === totalPages} onClick={handleNextPage}>Next &raquo;</button>
                    </div>
                    <div className="page-size-container">
                        <label htmlFor="pageSize" className="page-size-label">Page Size:</label>
                        <input id="pageSize" type="number" value={pageSize} onChange={handlePageSizeChange} className="page-size-input" />
                    </div>

                </>
            )}
        </>
    );
}

export default Assembly;

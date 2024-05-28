import "../style/navbar1.css";
import logo from "../images/election-jalandhar-2024.png";
import NITJlogo from "../images/logo_250.png.png";
import { useEffect, useState, useRef } from 'react';
import axios from "axios";
function Navbar1() { 
    const [partName, setPartName] = useState("");
    const [selectedAssembly, setSelectedAssembly] = useState("");
    const [filteredData, setFilteredData] = useState([]); 
    const [assemblyData, setAssemblyData] = useState([]) ;
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
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(25); 
    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const handleAssemblyChange = (event) => {
        const selectedName = event.target.value;
        setSelectedAssembly(selectedName);
        setPartName("");
        if (selectedName) {
            const assemblyData = assembly.filter(place => place.location === selectedName);
            setFilteredData(assemblyData);
        } else {
            setFilteredData([]);
        }
    };
    const fetchData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_SERVER_URL);
            // const data = response.data;
            // testing 
            const data = response.data.data;
            const currentTime = Date.now();
            sessionStorage.setItem('ttl', currentTime);
            sessionStorage.setItem('assemblyData', JSON.stringify(data));
            setAssemblyData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const storedTime = sessionStorage.getItem('ttl');
        const nowTime = Date.now();
        if (nowTime - storedTime < 10 * 60 * 1000) {
            const storedData = sessionStorage.getItem('assemblyData');
            setAssemblyData(JSON.parse(storedData)); 
        } else {
            fetchData();
        }
        const intervalId = setInterval(fetchData, 10 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);  

    useEffect(() => {
        if (selectedAssembly) {
            let data = assemblyData.filter(place => place.location === selectedAssembly);
            if (partName) {
                data = data.filter(place => place.boothid == partName);
            }
            setFilteredData(data);
            setCurrentPage(1);
        }else{
            setFilteredData(assemblyData);
        }
        setCurrentPage(1);
    }, [selectedAssembly, partName, assemblyData]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const content = document.querySelector('.content');
            const background = document.querySelector('.hero-container');

            if (content && background) {
                content.style.transform = `translateY(${scrollPosition * -2.0}px)`;
                background.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const bottomDivRef = useRef(null);

    const scrollToBottom = () => {
      bottomDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <div className="hero-container">
            <div className="logo-container">
                <img src={logo} alt="Voter ID Online" className="logo" />
                <div>

                <div className="logo-text">District Election Office Jalandhar</div>
                <div className="logo-text">LOK SABHA ELECTION</div>
                </div>
                {/* <img src={NITJlogo} alt="NITJ Logo" className="logo" /> */}
            </div>
            <div className="overlay"></div>
            <div className="content">
                <h1>Voter-in-Queue Information</h1>
                <p>Plan Ahead and Cast Your Vote!
                <br />
                ਅੱਗੇ ਦੀ ਯੋਜਨਾ ਬਣਾਓ ਅਤੇ ਆਪਣੀ ਵੋਟ ਦਿਓ!</p>
                <button className="apply-button" onClick={() => window.open("https://electoralsearch.eci.gov.in/", "_blank")}>
                    Know your Constituency and Part Number
                    <br />
                    ਆਪਣੇ ਚੋਣ ਖੇਤਰ ਅਤੇ ਭਾਗ ਨੰਬਰ ਜਾਣੋ
                    <span className="arrow">→</span>
                </button>
                <button className="apply-button" onClick={scrollToBottom}>
                    By Assembly Constituencies & Polling Station Number
                    <br />
                    ਵਿਧਾਨ ਸਭਾ ਹਲਕਿਆਂ ਅਤੇ ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ ਨੰਬਰ ਦੁਆਰਾ
                    <span className="arrow">↓</span>
                </button>
            </div>
            </div>
            <div className="form-container" id="bottomDiv" ref={bottomDivRef}>
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
                    onChange={(e) => {setPartName(e.target.value)}}
                />
            </div>
            {currentItems.length > 0 && (
                <table className='table-container'>
                    <thead>
                    <tr>
                       <th>Part Name/ਭਾਗ ਨਾਮ </th>
                       {/* <th>Assembly/Constituency</th> */}
                       <th>Rush/ਭੀੜ 
                       </th>
                       <th>Last Update/ਆਖਰੀ ਤਬਦੀਲੀ
                        </th>
                       <th>Location/ਟਿਕਾਣਾ</th>
                   </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((data, index) => (
                            <tr key={index}>
                  <td>
                  <div style={{ textAlign: 'center' }}>
                      <div>{data.boothid} - {data.partname}</div>
                      <hr />
                      <div>{data.boothid} - {data.partnamepb}</div>
                    </div>
                  </td>
                  {/* <td>{data.location}</td> */}
                  <td>{data.rush}</td>
                  <td>{data.time}</td>
                  <td>
                    <button
                      className="location-tab"
                      onClick={() => window.open(`${data.url}`, "_blank")}
                    >
                      Click here
                    </button>
                  </td>
                </tr>
                        ))}
                    </tbody>
                </table>
            )} 
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </>
    );
}
export default Navbar1;

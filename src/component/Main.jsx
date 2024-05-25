import "../style/main.css";
import Assembly from "./Assembly";
import BoothNumber from "./BoothNumber";
import PartName from "./partName";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Main() {
    const [part, setPart] = useState(2);
    const [assembly, setAssembly] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_SERVER_URL);  
            const data = response.data;
            // testing 
            // const data = response.data.data;
            const currentTime = Date.now();
            sessionStorage.setItem('ttl', currentTime); 
            sessionStorage.setItem('assemblyData', JSON.stringify(data));
            setAssembly(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        const storedTime = sessionStorage.getItem('ttl');
        const nowTime = Date.now();
        if (nowTime - storedTime < 10*60*1000) {
            const storedData = sessionStorage.getItem('assemblyData');
            setAssembly(JSON.parse(storedData));
        } else { 
            fetchData();
        } 
        const intervalId = setInterval(fetchData, 10 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div className="assembly-container">
                <div className="tabs">
                    <button className="tab" onClick = {() => setPart(1)}>By Assembly Constituencies Name <br /> ਵਿਧਾਨ ਸਭਾ ਹਲਕਿਆਂ ਦੇ ਨਾਮ ਦੁਆਰਾ</button>
                    {/* <button className="tab" onClick = {() => setPart(2)}>By Assembly/ Constituencies & Polling Station Details</button> */}
                    <button className="tab1" onClick = {() => setPart(2)}>By Assembly Constituencies & Polling Station Number <br />ਵਿਧਾਨ ਸਭਾ ਹਲਕਿਆਂ ਅਤੇ ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ ਨੰਬਰ ਦੁਆਰਾ</button>
                    <button className="tab2" onClick = {() => setPart(3)}>By Assembly Constituencies & Polling Station Name <br />ਵਿਧਾਨ ਸਭਾ ਹਲਕਿਆਂ ਅਤੇ ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ ਦੇ ਨਾਮ ਦੁਆਰਾ</button>
                    {/* <button class="button-29" role="button">Button 29</button> */}
                </div>
                <div className="form-container">
                    {part == 1 && <Assembly assembliesData = {assembly}/>}
                    {part == 2 && <BoothNumber assembliesData = {assembly}/>} 
                    {part == 3 && <PartName assembliesData = {assembly}/>}
                </div>
            </div>
        </>
    )
}
export default Main;

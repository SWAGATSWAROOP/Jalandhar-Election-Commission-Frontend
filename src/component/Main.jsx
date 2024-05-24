import '../style/main.css';
import Assembly from './Assembly';
import BoothNumber from './BoothNumber';
import React, {useState, useEffect } from 'react';
import axios from 'axios';
function Main() {
    const [part, setPart] = useState(1);
    const [assembly, setAssembly] = useState([]);
    const data = [
        {
          partNumber: '001',
          assembly: 'A1',
          locationRush: 'Yes',
          lastUpdatedTime: '2023-05-01 10:00',
          location: 'Warehouse 1',
        },
        {
          partNumber: '002',
          assembly: 'A2',
          locationRush: 'No',
          lastUpdatedTime: '2023-05-02 12:00',
          location: 'Warehouse 2',
        },
        // Add more data as needed
      ];
    const fetchData = async () => {
        try {
            const response = await axios.get('https://script.google.com/macros/s/AKfycbwNk1qiVCgkvBpcs7AucJPmtwaYdliQU0-wjG8qhQwJ0lGkITXE1SzTUfmK_8qzP9mh/exec');  
            const data = response.data.data;
            const currentTime = Date.now();
            sessionStorage.setItem('ttl', currentTime); 
            sessionStorage.setItem('assemblyData', JSON.stringify(data));
            setAssembly(data);
            console.log("the asembly data",assembly);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        const storedTime = sessionStorage.getItem('ttl');
        const nowTime = Date.now();
        if (nowTime - storedTime < 10*60*1000) {
            const storedData = sessionStorage.getItem('assemblyData')
            console.log('yes');
            setAssembly(JSON.parse(storedData));
        } else {
            console.log('no');
            fetchData();
        } 
        const intervalId = setInterval(fetchData, 10 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div className="assembly-container">
                <div className="tabs">
                    <button className="tab" onClick = {() => setPart(1)}>By Assembly/ Constituencies (General)</button>
                    {/* <button className="tab" onClick = {() => setPart(2)}>By Assembly/ Constituencies & Polling Station Details</button> */}
                    <button className="tab" onClick = {() => setPart(2)}>By Assembly/ Constituencies & Polling Station Number</button>
                </div>
                <div className="form-container">
                    {part == 1 && <Assembly assembliesData = {assembly}/>}
                    {part == 2 && <BoothNumber assembliesData = {assembly}/>} 
                </div>
            </div>
        </>
    )
}
export default Main;
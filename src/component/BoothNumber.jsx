import '../style/boothnumber.css';
function BoothNumber() {
    return (
        <>
            <div className="form-container"> 
                <select className="dropdown">
                    <option>Select your Assembly/Constituency</option> <option>Phillaur/ਫਿਲੌਰ</option>
                    <option>Nakodar/ਨਕੋਦਰ</option>
                    <option>Shahkot/ਸ਼ਾਹਕੋਟ</option>
                    <option>Kartarpur/ਕਰਤਾਰਪੁਰ</option>
                    <option>Jalandhar West/ਜਲੰਧਰ ਪੱਛਮੀ</option>
                    <option>Jalandhar Center/ਜਲੰਧਰ ਕੇਂਦਰ</option>
                    <option>Jalandhar North/ਜਲੰਧਰ ਉੱਤਰੀ</option>
                    <option>Jalandhar Cantt/ਜਲੰਧਰ ਛਾਉਣੀ</option>
                    <option>Adampur/ਆਦਮਪੁਰ</option> 
                </select> 
                <input className="dropdown" type="number" placeholder = "Enter your Part Number" /> 
                <button className="submit-button">Submit</button>
            </div>
        </>
    )
}
export default BoothNumber;
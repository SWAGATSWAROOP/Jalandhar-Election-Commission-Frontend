import '../style/boothnumber.css';
function BoothNumber() {
    return (
        <>
            <div className="form-container"> 
                <select className="dropdown">
                    <option>Select AC Detail</option> 
                </select>
                <select className="dropdown">
                    <option>Select your booth Id</option>
                </select>
                <button className="submit-button">Submit</button>
            </div>
        </>
    )
}
export default BoothNumber;
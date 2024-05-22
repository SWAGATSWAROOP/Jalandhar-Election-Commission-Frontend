import '../style/assembly.css';
function Assembly() {
    return (
        <>
            <div className="form-container"> 
                <select className="dropdown">
                    <option>Select AC Detail</option>
                    {/* Dropdown options would be populated here */}
                </select>
                <button className="submit-button">Submit</button>
            </div>
        </>
    )
}
export default Assembly
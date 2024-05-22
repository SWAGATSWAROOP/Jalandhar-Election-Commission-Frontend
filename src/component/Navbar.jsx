import '../style/navbar.css';
import Logo from '../images/election-logo.png';
import { useState } from 'react';
function Navbar() {
    const currentYear = new Date().getFullYear();
    const [language, setLanguage] = useState('en');
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <div>

            <div className='navbar'>
                <div className='col-space'>

                </div>
                <div className='col-2' style = {{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                    <img src={Logo} alt="election-logo" />
                    <h3 style={{ display: 'wrap', color: '#2e3192' }}><strong>District Electoral Office Jalandhar</strong></h3>
                </div>
                <div className='col-6'>
                    <h1 style={{ fontSize: '24px' }}> <strong>District Election Office - Jalandhar</strong> </h1>

                    <h1 style={{ fontSize: '20px', fontWeight : 'bold' }}>ELECTION {currentYear}</h1>
                    <h1 style={{ fontSize: '24px' }}><strong>VOTER in Queue</strong></h1>
                    <h1>Abhi Bar BJP</h1>
                    <div className="language-bar">
                        <label htmlFor="language">Choose a language: </label>
                        <select id="language" value={language} onChange={handleLanguageChange}>
                            <option value="en">English</option>
                            <option value="hn">Hindi</option>
                            <option value="pb">Punjabi</option>
                        </select>
                        {/* <h1>language : {language}</h1> */}
                    </div>
                </div>
                <div className='col-2'>

                </div>
                <div className='col-space'>

                </div>
            </div>
            <div className = "intro">
                <h1>Know Polling Queue Estimates, Cast Your Vote!</h1>
                <a style = {{textDecoration: 'underline', fontWeight : 'bold', color : 'blueviolet'}}href="https://www.google.com/maps">Click here to know about VOTER-IN-QUEUE information.</a>
            </div>
        </div>
    )
}
export default Navbar;
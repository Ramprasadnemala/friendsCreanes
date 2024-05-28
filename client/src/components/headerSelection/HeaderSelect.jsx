import React, { useState } from 'react';
import './HeaderSelect.css'; // Import CSS file for styling
import PopupForm from './PopupForm/PopupForm';
import crean from '../../images/crean.jpeg'
import { Link } from 'react-router-dom';
const HeaderSelect = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const togglePopup = () => {
        setShowPopup(prevState => !prevState);
    };
    const handleLogout = () => {
        // Perform logout action here, such as clearing session, resetting user state, etc.
        // For this example, we will simply set loggedIn state to false.
        setLoggedIn(false);
    };
    return (
        <>
            <nav className="navbar2001">
                <div className="nav-logo2001">
                    {/* <span><img src={crean} alt='crean' style={{ height: "50px", width: "70px", borderRadius: "10px" }} /></span> */}
                    <Link to="./" style={{ color: '#fff',textDecoration:"none",cursor:"pointer" }}>
                    <span>FRIENDS CRANES</span>
                    </Link>
                </div>
               
                {loggedIn ? (
                    <Link to="./">
                    <button className='login2001' onClick={handleLogout}>LogOut</button>
                    </Link>
                ) : (
                    <button className='login2001' onClick={togglePopup}>LogIn</button>
                )}
                {showPopup && <PopupForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} onClose={togglePopup} />}
            </nav>

        </>
    );
}

export default HeaderSelect;

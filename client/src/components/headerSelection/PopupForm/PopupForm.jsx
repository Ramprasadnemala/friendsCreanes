import React, { useState } from 'react';
import './PopupForm.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const PopupForm = ({ onClose, loggedIn, setLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log(formData);
    // Close the popup
    onClose();
  };
  const formClose =(e)=>{
    onClose()
    setLoggedIn(true);
  }

  return (
    <div className="popup2002">

      <div className="popup-inner2002">
        <button className="close-btn2002" onClick={onClose}>X</button>
        <h2>Login</h2><hr></hr>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='please enter your name' value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone Number:</label>
            <input type='number' id="phoneNo" name="phoneNo" placeholder='please enter your number' value={formData.phoneNo} onChange={handleChange} />
          </div>
          {
            formData.name==="admin" ?<Link to="/components/AllData/AllData">
            <button type="submit" onClick={formClose}>Submit</button>
          </Link>:<Link to="/components/AllData/AllUserData">
            <button type="submit" onClick={formClose}>Submit</button>
          </Link>
          }
          
        </form>
      </div>
    </div>
  );
}

export default PopupForm;

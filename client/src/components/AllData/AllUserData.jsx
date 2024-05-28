// AllUserData.jsx
import React, { useState } from 'react';
import './AllUserData.css'; // Import your external CSS file

const AllUserData = () => {
  const [formData, setFormData] = useState({
    name: '',
    userNo: '',
    earn: '',
    expense: '',
    date: '',
    work: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: (name === 'userNo' || name === 'earn' || name === 'expenses') ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the numeric fields are numbers
    const dataToSubmit = {
      ...formData,
      userNo: Number(formData.userNo),
      earn: Number(formData.earn),
      expense: Number(formData.expense)
    };

    try {
      const response = await fetch('http://localhost:5000/employees/add-emp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSubmit)
      });

      if (response.ok) {
        alert("Data submitted successfully");
        setFormData({
          name: '',
          userNo: '',
          earn: '',
          expense: '',
          date: '',
          work: ''
        });
      } else {
        alert("Error submitting data");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error submitting data");
    }
  };

  return (
    <div className="form-container">
      <h2 className="title"> <span style={{color:"orange"}}>W</span>elcome User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              style={{marginLeft:"5px"}}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userNo">Vehicle Number:</label>
            <input
              type="number"
              id="userNo"
              name="userNo"
              value={formData.userNo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="earn">Earnings:</label>
            <input
              style={{background:"green",color:"#fff",marginLeft:"5px"}}
              type="number"
              id="earn"
              name="earn"
              value={formData.earn}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expense">Expenses:</label>
            <input
              style={{background:"red",color:"#fff"}}
              type="number"
              id="expense"
              name="expense"
              value={formData.expense}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input 
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="work">Work:</label>
          <textarea
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default AllUserData;

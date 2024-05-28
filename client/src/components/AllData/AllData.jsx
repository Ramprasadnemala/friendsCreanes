import React, { useState, useMemo, useEffect } from 'react';
import './AllData.css'; // Import CSS file for styling

const AllData = () => {
    const [ProjectData, setProjectData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State to handle popup visibility
    const [popupLocation, setPopupLocation] = useState(''); // State to store the location for the popup

   

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch('http://localhost:3000/employees/allemployees');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProjectData(data);
          } catch (err) {
             console.log("Error:", err);
          }
        };
    
        getData();
      }, []);

      const filteredData = useMemo(() => {
        return ProjectData.filter(item => {
            if (filterCriteria === 'userId') {
                return item.userNo.toString().includes(searchQuery);
            } else if (filterCriteria === 'date') {
                return item.date.includes(searchQuery);
            } else {
                return true; // If no filter criteria selected, show all data
            }
        });
    }, [ProjectData, filterCriteria, searchQuery]);

    let totalEarn = 0;
    let totalExpense = 0;

    filteredData.forEach(item => {
        totalEarn += item.earn;
        totalExpense += item.expense;
    });

    const totalAmount = totalEarn - totalExpense;

    const handleWorkButtonClick = (location) => {
        // Set showPopup state to true when button is clicked
        setShowPopup(true);
        // Set the location for the popup
        setPopupLocation(location);
    };

    return (
        <>
            <div className='container2001'>
                <input
                    type='search'
                    className='search2001'
                    placeholder='Search by User ID or Date'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <select
                    value={filterCriteria}
                    onChange={e => setFilterCriteria(e.target.value)}
                    style={{borderRadius:"5px"}}
                >
                    <option value=''>Filter By</option>
                    <option value='userId'>VehicleNo</option>
                    <option value='date'>Date</option>
                </select>
            </div>

            <div className="table-container">
                <div className="table-wrapper2001">
                    <table className="table2001">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>VehicleNo</th>
                                <th>Earn</th>
                                <th>Expense</th>
                                <th>Date</th>
                                <th>WLocation</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.userNo}</td>
                                    <td>{item.earn}</td>
                                    <td>{item.expense}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        {/* Pass location to handleWorkButtonClick */}
                                        <button onClick={() => handleWorkButtonClick(item.work)}>work</button>
                                    </td>
                                    <td>{item.earn - item.expense}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={"2"}>Total Amount</td>
                                <td style={{background:"green",color:"#fff"}}>Rs {totalEarn}</td>
                                <td style={{background:"red",color:"#fff"}}>Rs {totalExpense}</td>
                                <td></td>
                                <td></td>
                                <td style={{background:"green",color:"#fff"}}>Rs {totalAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Popup/Modal */}
            {showPopup && (
                <div className="popup-overlay2001">
                    <div className="popup2001">
                        <h2>Location</h2>
                        <p>{popupLocation}</p> {/* Display location */}
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AllData;

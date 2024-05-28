
import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import crean from '../../images/crean.jpeg'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
            <img src="https://imgs.search.brave.com/gZDGkeDHgN9jBzqeH2gbF0fblp4Q2ItYvwo1VkdULBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M5L2Vm/LzRkL2M5ZWY0ZDhl/ZWEzYjlhZTMyMmMw/MTYzNDgwYmU3Yzdj/LmdpZg.gif" className='mg-srci' />
        </div>


        <div className="footer-center">
          <h4 style={{margin:'-3px 0'}}>Contact Us</h4>
          <p style={{margin:'-3px 0',fontSize:"15px"}}>Email: info@yourcompany.com</p>
          <p style={{margin:'-3px 0',fontSize:"15px"}}>Phone no: +9666155966</p>
         </div>
        <div className="footer-right" >
         <a href="#"> <img className="mg-srci-2" src='https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png' /></a>
         <a href="#"><img  className="mg-srci-3" src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook-icon-png-image_3566127.png' /></a>  
       
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;
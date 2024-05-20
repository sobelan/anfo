import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>Sobelan Mall Residence</h1>
                <br></br>
                <p className='text-white'> Built with quality,
Delivered on Time. </p>
                {/* <a href = "/" className='btn header-btn btn-blue'>
                    <FaPaperPlane /> <span>REGISTER INTEREST</span>
                </a> */}
            </div>
        </div>
    </header>
  )
}

export default Header
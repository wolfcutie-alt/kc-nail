import React from 'react';
import { FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <p>Website Designed by <a href="https://github.com/wolfcutie-alt">Nathan Doan</a></p>
      <p>© 2021 KCNails. All Rights Reserved.</p>
      <div className='socialLinks'>
        <FaFacebook />
        <FaInstagram />
      </div>
    </div>
  )
}

export default Footer
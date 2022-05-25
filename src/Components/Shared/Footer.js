import React from "react";
import map from '../../Images/map.png'
import facebook from '../../Images/facebook.png'
import insta from '../../Images/insta.png'
import linked from '../../Images/linkedin.png'


const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-neutral text-neutral-content mt-12">
        <div>
          <span class="footer-title">All copyright ©️ reserved to Nur@Total Tools</span>
        </div>
        <div>
          <span class="footer-title">Address</span>
          <img style={{width: '200px'}} src={map} alt="" />
          <a class="link link-hover">Shop-C/3, Manoshi Complex, 1 Bangshal Rd, Dhaka 1100</a>
        </div>
        <div>
          <span class="footer-title">Social Contact Links</span>
          <a target='_blank' href="https://www.facebook.com/assrafnur/" class="link link-hover"><img src={facebook} alt="" /></a>
          <a target='_blank' href="https://www.instagram.com/tesla_nur/?hl=en" class="link link-hover"><img src={insta} alt="" /></a>
          <a target='_blank' href="https://www.linkedin.com/in/assrafuzzaman-nur-260610211/" class="link link-hover"><img src={linked} alt="" /></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

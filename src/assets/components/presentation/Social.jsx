import './Social.css';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';



function Social() {
    return (
        <div className="social-container">
            <a href="https://www.instagram.com/rebeca_desing_de_sobrancelhas" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon"/>
            </a>
            <a href="https://wa.me/5561985787089" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://maps.app.goo.gl/MWuNBbLtKFWhm1PL7" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className="social-icon" />
            </a>
        </div>
    );
}

export default Social;

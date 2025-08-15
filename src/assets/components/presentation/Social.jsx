import './Social.css';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';



function Social() {
    return (
        <div className="social-container">
            <a href="https://instagram.com/seuPerfil" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon"/>
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://www.google.com/maps/place/Sua+Localização" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className="social-icon" />
            </a>
        </div>
    );
}

export default Social;

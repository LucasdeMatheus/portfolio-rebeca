import { FaWhatsapp } from 'react-icons/fa';
import './Whatsapp.css';

function Whatsapp() {
    return (
        <div className='icon-Whatsapp'>
            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className='icon' />
            </a>
        </div>
    );
}

export default Whatsapp;

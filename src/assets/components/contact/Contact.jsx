import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    return (
        <div className='container-contact'>
            <a
                href="https://wa.me/5561985787089"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className='icon' />
                <p>Agende seu horário!</p>
            </a>
        </div>
    );
}

export default Contact;

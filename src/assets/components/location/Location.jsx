import { FaWhatsapp } from 'react-icons/fa';
import './Location.css';

function Location() {
    return (
        <div className='container-location'>
            <h1>Venha conhecer meu espaço!</h1>
            <div className='location'>
                <div className='convite'>
                    <p > 2ª loja à sua esquerda, neste mesmo corredor.</p>
                    <p className="desktop-only">Espero por você!</p>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1755181135962!6m8!1m7!1s35uwMWajLt885ZquznzWeQ!2m2!1d-15.80660622865692!2d-48.07724875974592!3f69.37696871107062!4f-7.0842871834255305!5f0.7820865974627469"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="mobile-only">Espero por você!</p>
            </div>
        </div>
    );
}

export default Location;

import React, { useState } from 'react';
import './Gallery.css'
import Contact from '../contact/Contact.jsx'
function Gallery() {
    const urls = [
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755098746/c%C3%ADlios_de_tufos_photo_yvyxeg.png",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755261036/sobrancelha_definitiva_photo_ppduuh.png",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755260946/micropigmenta%C3%A7%C3%A3o_photo1_abntbd.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755260946/micropigmenta%C3%A7%C3%A3o_photo_uubq4u.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755098742/sobrancelha_definitiva_photo3_fujq7d.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755098749/sobrancelha_simples_photo1_t49wex.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755098743/sobrancelha_simples_photo_quifxj.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755098743/sobrancelha_definitiva_photo5_tm5k2p.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755098747/sobrancelha_definitiva_photo1_pmnumf.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755098742/sobrancelha_definitiva_photo4_h3guvg.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755098749/sobrancelha_simples_photo2_xixjqz.jpg",
        "https://res.cloudinary.com/dakaahp6c/image/upload/v1755175185/lash_lifting_photo_spzecz.png"
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const extrairNome = (url) => {
        let arquivo = url.split("/").pop(); // pega última parte da URL
        arquivo = decodeURIComponent(arquivo); // decodifica acentos
        arquivo = arquivo.replace(/_photo.*\.[a-z]+$/i, ""); // remove _photo e depois
        arquivo = arquivo.replace(/\.[a-z]+$/i, ""); // remove extensão caso não tenha _photo
        arquivo = arquivo.replace(/_/g, ' '); // substitui underscores por espaço
        return arquivo;
    };

    const openImage = (i) => {
        setSelectedIndex(i);
    }

    const closeImage = () => setSelectedIndex(null);
    return (
        <div className='container-gallery'>

            <h1>Galeria</h1>
            <div className='container-gallery-photos'>
                <p className="mobile-only">Confira alguns dos resultados de serviços que já realizei em minhas clientes.</p>
                <div className='gallery-photos'>
                    <div className='container-photos'>
                        {urls.map((url, index) => (
                            <div key={index} className='image'>
                                <img src={url} alt={extrairNome(url)} onClick={() => openImage(index)} />
                            </div>
                        ))}
                    </div>
                    {selectedIndex !== null && (
                        <div className="lightbox" onClick={closeImage}>
                            <div className='container-imageSelected'>
                                <img src={urls[selectedIndex]} alt={extrairNome(urls[selectedIndex])} />
                                <p>{extrairNome(urls[selectedIndex])}</p>
                                <Contact />
                            </div>
                        </div>
                    )}
                </div>
                <p className="desktop-only">Confira alguns dos resultados de serviços que já realizei em minhas clientes.</p>
            </div>
        </div>
    )
}
export default Gallery;

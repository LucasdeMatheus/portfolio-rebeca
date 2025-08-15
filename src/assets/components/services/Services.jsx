import './services.css';
import { useEffect, useRef } from "react";
import Contact from '../contact/Contact.jsx'
import procedures from '../../data/images.json';

function Services() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let direction = 1;
        let isPaused = false;
        let resumeTimeout;

        const scrollStep = 1.5;
        const scrollInterval = 20;

        const scrollCarousel = () => {
            if (isPaused) return;

            carousel.scrollLeft += direction * scrollStep;

            if (
                carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth ||
                carousel.scrollLeft <= 0
            ) {
                direction *= -1;
            }
        };

        const interval = setInterval(scrollCarousel, scrollInterval);

        const pauseScroll = () => {
            isPaused = true;
            clearTimeout(resumeTimeout);
        };

        const resumeScroll = () => {
            clearTimeout(resumeTimeout);
            resumeTimeout = setTimeout(() => {
                isPaused = false;
            }, 3000); // retoma 3s após a última interação
        };

        // Removido: mouseenter/mouseleave
        carousel.addEventListener('mousedown', pauseScroll);
        carousel.addEventListener('touchstart', pauseScroll);

        carousel.addEventListener('mouseup', resumeScroll);
        carousel.addEventListener('touchend', resumeScroll);

        // Cleanup
        return () => {
            clearInterval(interval);
            clearTimeout(resumeTimeout);
            carousel.removeEventListener('mousedown', pauseScroll);
            carousel.removeEventListener('touchstart', pauseScroll);
            carousel.removeEventListener('mouseup', resumeScroll);
            carousel.removeEventListener('touchend', resumeScroll);
        };
    }, []);

    return (
        <div className="services-container">
            <h1>Serviços</h1>
            <div className="services-icon">
                <div className="icon">
                    <img src="https://res.cloudinary.com/dakaahp6c/image/upload/v1754570215/292d737a-514b-4bb3-bdb4-b60c08eef72f.png" alt="sobrancelha" />
                </div>
                <div className="icon">
                    <img src="https://res.cloudinary.com/dakaahp6c/image/upload/v1754428962/pernas_xwsduy.png" alt="pernas" />
                </div>
                <div className="icon">
                    <img src="https://res.cloudinary.com/dakaahp6c/image/upload/v1754428962/cilios_oacesx.png" alt="cilios" />
                </div>
            </div>
            <div className='card-container'>
                <p>Mais de 10 anos cuidando da sua beleza com excelência, qualidade e amor pelo que fazemos.</p>
                <div className='cards-container' ref={carouselRef}>
                    {procedures.images.map((item, i) => (
                        <div className="card" key={i}>
                            <img src={item.link} alt={item.nome} />
                            <p>{item.nome}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Contact />
        </div>
    );

}

export default Services;

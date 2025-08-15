import { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [visible, setVisible] = useState(true);

  function showNavbar() {
    setVisible(!visible);
  }

  return (
    <div className={`navbarContainer ${visible ? 'active' : ''}`}>
      {visible && (
        <>
          <a href="#home" className="nav visible">Home</a>
          <a href="#services" className="nav visible">Serviços</a>
          <a href="#galeria" className="nav visible">Galeria</a>
        </>
      )}
      <button className={`linebar ${visible ? 'linebar-active' : ''}`} onClick={showNavbar}>
        <FaBars size={28} />
      </button>
    </div>
  );
}

export default Navbar;

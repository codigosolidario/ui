import React from 'react';
import './Navbar.css';
import Logo from './Logo2.png'
const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar__left">
                    <img src={Logo} className='Logo'></img>
                    </div>
                <div className="navbar__right">
                    <a href="#">Inicio</a>
                    <a href="#">Nuestro Trabajo</a>
                    <a href="#">Apóyanos</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Contáctanos</a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

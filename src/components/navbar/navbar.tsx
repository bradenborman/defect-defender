import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar" onClick={e => { navigate("/") }}>Defect Defender</nav>
    )
};

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Nav = () => (
    <div className="Nav">
        <nav>
            <Link className="nav-link" to="/">Sobre</Link>
            <Link className="nav-link" to="/publications">Publicações</Link>
            <Link className="nav-link" to="/repos">Repositórios</Link>
            <Link className="nav-link" to="/members">Membros</Link>
        </nav>
    </div>
);

export default Nav;

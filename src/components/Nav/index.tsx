import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Nav = () => (
    <div className="Nav">
        <nav>
            <Link className="nav-link" to="/website">Sobre</Link>
            <Link className="nav-link" to="/website/publications">Publicações</Link>
            <Link className="nav-link" to="/website/repos">Repositórios</Link>
            <Link className="nav-link" to="/website/members">Membros</Link>
        </nav>
    </div>
);

export default Nav;

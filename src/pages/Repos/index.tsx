import Header from '../../components/Header'
import Nav from '../../components/Nav'

import './style.css'

const Repos = () => {
    return (
        <div className="Repos">
            <Header />
            <Nav />
            <main>
                <a
                    className="main-link" target="_blank" rel="noreferrer"
                    href="https://github.com/cefetmg-samp"
                > GitHub </a>
                <a
                    className="main-link" target="_blank" rel="noreferrer"
                    href="https://gitlab.com/cefetmg"
                > GitLab </a>
            </main>
        </div>
    );
};

export default Repos;

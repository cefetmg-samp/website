import Header from '../../components/Header'
import Nav from '../../components/Nav'

import './style.css'

const About = () => {
    return (
        <div className="About">
            <Header />
            <Nav />
            <main>
                <p>
                    O projeto de pesquisa do GTA-SA/SA-MP do{' '}
                    <a target="_blank" rel="noreferrer" href="https://www.cefetmg.br/">
                        CEFET-MG
                    </a>
                    {' '} consiste no desenvolvimento de simulações de redes veiculares
                    autônomas no{' '}
                    <a target="_blank" rel="noreferrer" href="https://sa-mp.com/">
                        SA-MP
                    </a>
                    , modificação do jogo de computador GTA San Andreas.
                </p>
            </main>
        </div>
    );
};

export default About;

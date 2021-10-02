import Header from '../../components/Header'
import Nav from '../../components/Nav'

import './style.css'

const Members = () => {
    return (
        <div className="Members">
            <Header />
            <Nav />
            <main>
                <a 
                    className="member" target="_blank" rel="noreferrer"
                    href="https://linkedin.com/in/juliocros"
                > Julio Cesar Rocha </a>
                <a 
                    className="member" target="_blank" rel="noreferrer"
                    href="https://linktr.ee/pcmferreira"
                > Pedro César Mesquita Ferreira </a>
                <a 
                    className="member" target="_blank" rel="noreferrer"
                    href="https://linkedin.com/in/rrnovaesjr"
                > Rodrigo Novaes </a>
                <a 
                    className="member" target="_blank" rel="noreferrer"
                    href="https://linkedin.com/in/sandrord"
                > Sandro Renato Dias </a>
            </main>
        </div>
    );
};

export default Members;

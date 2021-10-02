import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Anchor from '../../components/Anchor'

const Members = () => {
    return (
        <div className="Members">
            <Header />
            <Nav />
            <main>
                <Anchor url="https://linkedin.com/in/juliocros">
                    Julio Cesar Rocha
                </Anchor>
                <Anchor url="https://linktr.ee/pcmferreira">
                    Pedro César Mesquita Ferreira
                </Anchor>
                <Anchor url="https://linkedin.com/in/rrnovaesjr">
                    Rodrigo Novaes
                </Anchor>
                <Anchor url="https://linkedin.com/in/sandrord">
                    Sandro Renato Dias
                </Anchor>
            </main>
        </div>
    );
};

export default Members;

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Anchor from '../../components/Anchor'

const Publications = () => {
    const baseURL = 'https://github.com/cefetmg-samp/publications/tree/main'
    return (
        <div className="Publications">
            <Header />
            <Nav />
            <main>
                <Anchor url={`${baseURL}/semanact-2021`}>
                    {'Semana C&T 2021'}
                </Anchor>
                <Anchor url={`${baseURL}/iaria-vehicular-2020`}>
                    IARIA VEHICULAR 2020
                </Anchor>
                <Anchor url={`${baseURL}/meta-2019`}>
                    META 2019
                </Anchor>
            </main>
        </div>
    );
};

export default Publications;

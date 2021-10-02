import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Anchor from '../../components/Anchor'

const Repos = () => {
    return (
        <div className="Repos">
            <Header />
            <Nav />
            <main>
                <Anchor url="https://github.com/cefetmg-samp">GitHub</Anchor>
                <Anchor url="https://gitlab.com/cefetmg">GitLab</Anchor>
            </main>
        </div>
    );
};

export default Repos;

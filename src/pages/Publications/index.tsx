import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Anchor from '../../components/Anchor'

import publicationsData from '../../data/publications'

const Publications = () => {
    return (
        <div className="Publications">
            <Header />
            <Nav />
            <main>
                {
                    publicationsData.map((publication) => (
                        <Anchor url={publication.url}>
                            {publication.title}
                        </Anchor>
                    ))
                }
            </main>
        </div>
    );
};

export default Publications;

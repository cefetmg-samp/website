import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Anchor from '../../components/Anchor'

import membersData from '../../data/members'

const Members = () => {
    return (
        <div className="Members">
            <Header />
            <Nav />
            <main>
                {
                    membersData.map((member) => (
                        <Anchor url={member.url}>
                            {member.name}
                        </Anchor>
                    ))
                }
            </main>
        </div>
    );
};

export default Members;

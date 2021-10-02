import React from 'react'

import './style.css'

interface AnchorProps {
    url: string
    children: string
}

const Anchor: React.FC<AnchorProps> = ({ url, children }) => (
    <a className="Anchor" rel="noreferrer" target="_blank" href={url}>
        {children}
    </a>
)

export default Anchor

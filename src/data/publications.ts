import PublicationInterface from '../models/publication-interface'

const baseURL = 'https://github.com/cefetmg-samp/publications/tree/main'

const publicationsData: PublicationInterface[] = [
    {
        title: 'Semana C&T 2021',
        url: `${baseURL}/semanact-2021`,
    },
    {
        title: 'IARIA VEHICULAR 2020',
        url: `${baseURL}/iaria-vehicular-2020`,
    },
    {
        title: 'META 2019',
        url: `${baseURL}/meta-2019`,
    },
]

export default publicationsData

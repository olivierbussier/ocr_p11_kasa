import './style.scss'

import { fetchAll } from '../../data/fetchData'

import Card from '../../components/Card'
import Banner from '../../components/Banner'

/* Composants privés */

const ContainerBiens = ({biens}) => {
    return <div className="container-biens">
        {biens.map((a, index) => <Card data={a} key={'card-' + index}/>)}
    </div>
}

const Main = () => {

    const data = fetchAll()

    return <div className='main'>

        <Banner images={'/assets/banner.png'}>Chez vous, partout et ailleurs</Banner>

        <ContainerBiens biens={data} />

    </div>
}

export default Main
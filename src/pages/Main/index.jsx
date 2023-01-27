import './style.scss'

import { fetchAll } from '../../data/fetchData'

import Card from '../../components/Card'
import Banner from '../../components/Banner'

const Main = () => {

    const Data = fetchAll()

    return <div className='main'>
        <Banner images={['/assets/banner.png']}>Chez vous, partout et ailleurs</Banner>
        <div className="container-biens">
            {Data.map((a, index) => <Card data={a} key={'card-' + index}/>)}
        </div>
    </div>
}

export default Main
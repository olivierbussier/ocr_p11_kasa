import './style.scss'
import Data from '../../data/logements.json'
import Thumb from '../../components/Thumb'

const Main = () => {

    console.log(Data)

    return <div className='main'>
        <div className='banner'>
            <img src='./assets/banner.png' className='banner-image' alt='banner kasa' />
            <div className='banner-centered-text'>Chez vous, partout et ailleurs</div>
        </div>
        <div className="container-biens">
            {Data.map((a, index) => <Thumb data={a} key={'thumb-' + index}/>)}
        </div>
    </div>
}

export default Main
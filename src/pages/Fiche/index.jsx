import { useParams } from 'react-router-dom'
import Badge from '../../components/badge'
import Banner from '../../components/Banner'
import { fetchId } from '../../data/fetchData'
import TextCollapse from '../../components/TextCollapse'

import './style.scss'

const Fiche = () => {

    const {id} = useParams()
    const fiche = fetchId(id)

    console.log("<Fiche:data(id)=",fiche)

    return <div className='fiche'>
        <Banner images={fiche.pictures} height={415}/>
        <div className="container-fiche">
            <div className="header-fiche">
                <div className='title-fiche'>{fiche.title}</div>
                <div className="localisation-fiche">{fiche.location}</div>
                <div className="badges">
                    {fiche.tags.map((tag, index) =>
                        <Badge key={index}>{tag}</Badge>
                    )}
                </div>
            </div>
            <div className="description-fiche">
                <TextCollapse title='Description'>{fiche.description}</TextCollapse>
                <TextCollapse title='Equipements'>{fiche.equipments.map((e, index) => <span key={'fiche_' + index}>{e}<br/></span>)}</TextCollapse>
            </div>
        </div>
    </div>
}

export default Fiche
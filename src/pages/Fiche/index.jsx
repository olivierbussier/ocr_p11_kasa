import { useParams, Navigate } from 'react-router-dom'
import React from 'react'

import Badge from '../../components/badge'
import Banner from '../../components/Banner'
import TextCollapse from '../../components/TextCollapse'
import Rating from '../../components/Rating'

import { fetchId } from '../../data/fetchData'

import './style.scss'

const Fiche = () => {

    const {id} = useParams()
    const fiche = fetchId(id)

    // console.log("ff=", fiche)


    if (!fiche)
        return  <Navigate to="/*"/>

    // console.log("<Fiche:data(id)=",fiche)

    return <div className='page-fiche'>
        <Banner images={fiche.pictures} height={415}/>
        <div className="container-fiche">
            <div className="header-fiche">
                <div className="col-gauche">
                    <div className="description">
                        <div className='title-fiche'>{fiche.title}</div>
                        <div className="localisation-fiche">{fiche.location}</div>
                    </div>
                    <div className="badges">
                        {fiche.tags.map((tag, index) =>
                            <Badge key={index}>{tag}</Badge>
                        )}
                    </div>
                </div>
                <div className="col-droite">
                    <div className="author">
                        <div className="author-name">{fiche.host.name}</div>
                        <img className="author-picture" src={fiche.host.picture} alt='host'></img>
                    </div>
                    <div className="evaluation">
                        <Rating rating={fiche.rating} />
                    </div>
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
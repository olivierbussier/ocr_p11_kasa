import { useParams, redirect, Navigate } from 'react-router-dom'

import Badge from '../../components/badge'
import Banner from '../../components/Banner'
import { fetchId } from '../../data/fetchData'
import TextCollapse from '../../components/TextCollapse'

import './style.scss'
import React from 'react'
import Rating from '../../components/Rating'

const Fiche = () => {

    const {id} = useParams()
    const fiche = fetchId(id)

    // console.log("ff=", fiche)


    if (!fiche)
        return  <Navigate to="/*"/>

    console.log("<Fiche:data(id)=",fiche)

    return <div className='fiche'>
        <Banner images={fiche.pictures} height={415}/>
        <div className="container-fiche">
            <div className="header-fiche">
                <div className="ligne-haut">
                    <div className="description">
                        <div className='title-fiche'>{fiche.title}</div>
                        <div className="localisation-fiche">{fiche.location}</div>
                    </div>
                    <div className="author">
                        <div className="author-name">{fiche.host.name}</div>
                        <img className="author-picture" src={fiche.host.picture} alt='host'></img>
                    </div>
                </div>
                <div className="ligne-bas">
                    <div className="badges">
                        {fiche.tags.map((tag, index) =>
                            <Badge key={index}>{tag}</Badge>
                        )}
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
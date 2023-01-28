import { useParams, Navigate } from 'react-router-dom'
import React from 'react'

import Badge        from '../../components/badge'
import Banner       from '../../components/Banner'
import TextCollapse from '../../components/TextCollapse'
import Rating       from '../../components/Rating'

import { fetchId } from '../../data/fetchData'

import './style.scss'

// Composants privés

const ContainerFiche = ({children}) => <div className='container-fiche'>{children}</div>
const HeaderFiche    = ({children}) => <div className='header-fiche'>{children}</div>
const Column         = ({children, position}) => <div className={'col-' + position}>{children}</div>
const Description    = ({title, localisation}) => {
    return <div className="description">
        <div className='title-fiche'>{title}</div>
        <div className="localisation-fiche">{localisation}</div>
    </div>
}

const Badges         = ({badges}) => <div className='badges'>{badges.map((tag, index) => <Badge key={index}>{tag}</Badge>)}</div>
const Author         = ({name, image}) => {
    return <div className="author">
        <div className="author-name">{name}</div>
        <img className="author-picture" src={image} alt='host'></img>
    </div>
}

const Details        = ({description, equipements}) => {
    return  <div className="description-fiche">
        <TextCollapse title='Description'>{description}</TextCollapse>
        <TextCollapse title='Equipements'>{equipements.map((e, index) => <span key={'fiche_' + index}>{e}<br/></span>)}</TextCollapse>
    </div>
}

const Fiche = () => {

    const {id} = useParams()
    const fiche = fetchId(id)

    if (!fiche)
        return  <Navigate to="/404"/>

    return <div className='page-fiche'>

        <Banner images={fiche.pictures} height={415}/>

        <ContainerFiche>
            <HeaderFiche>
                <Column position="gauche">

                    <Description title={fiche.title} localisation={fiche.location} />
                    <Badges badges={fiche.tags}/>

                </Column>

                <Column position="droite">

                    <Author name={fiche.host.name} image={fiche.host.picture}/>
                    <Rating rating={fiche.rating}/>

                </Column>

            </HeaderFiche>

            <Details description={fiche.description} equipements={fiche.equipments} />

        </ContainerFiche>
    </div>
}

export default Fiche
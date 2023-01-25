import './style.scss'

const Thumb = ({data}) => {

    console.log("<Thumb:data=", data)

    return <div className='thumb'>
        <a href={"fiche/" + data.id}>
            <img className='picture' src={data.cover} alt='Bien'/>
            <div className="title">
                {data.title}
            </div>
        </a>
    </div>
}

export default Thumb
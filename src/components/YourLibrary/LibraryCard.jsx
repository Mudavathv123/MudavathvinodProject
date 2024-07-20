import './yourLibrary.css'

const LibraryCard = props => {

    const {libraryCard} = props
    const {headText,cardBtn,description} = libraryCard
    return (
    <li className="library-card-container">
        <h1 className="library-card-head">{headText}</h1>
        <p className="library-card-description">{description}</p>
        <button className="library-card-btn">{cardBtn}</button>
    </li>
    )
}

export default LibraryCard
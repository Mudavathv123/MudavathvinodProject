
import './showAllArtist.css'

const ShowAllArtistCard = props => {

    const { artist } = props
    const { artistName, artistImageUrl } = artist;
    return (
        <li className="show-all-artists-card-container">
            <div className='play-show-all-artists-btn-container'>
                <img src={artistImageUrl} alt="artist" className="show-all-artists-img" />
                <button className="play-show-all-artists-btn">
                    <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play albumb" className='play-show-all-artists-img' />
                </button>
            </div>
            <span className="show-all-artists-name">{artistName}</span>
            <span className="show-all-artists-artist">Artist</span>
        </li>
    )
}

export default ShowAllArtistCard
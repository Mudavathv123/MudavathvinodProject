import './popularArtists.css'

const ArtistCard = props => {
    const { artist } = props
    const { artistName, artistImageUrl } = artist;
    return (
        <li className="artists-card-container">
            <div className='play-artist-btn-container'>
                <img src={artistImageUrl} alt="artist" className="artist-img" />
                <button className="play-artist-btn">
                    <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play albumb" className='play-artist-img' />
                </button>
            </div>
            <span className="artist-name">{artistName}</span>
            <span className="artist">Artist</span>
        </li>
    )
}

export default ArtistCard
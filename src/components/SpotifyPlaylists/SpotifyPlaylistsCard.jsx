
import { Link } from 'react-router-dom';
import './spotifyPlaylists.css'

const SpotifyPlaylistsCard = props => {

    const { playlist } = props
    const { albumArtist, albumName, albumImageUrl, albumId } = playlist;


    return (
        <Link to={`albumbs/${albumId}`} className="link">
            <li className="playlist-card-container">
            <div className='play-playlist-btn-container'>
                <img src={albumImageUrl} alt="playlist" className="playlist-img" />
               
                    <button className="play-playlist-btn">
                        <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play playlist" className='play-playlist-img' />
                    </button>
                </div>
                <span className="playlist-name">{albumName}</span>
                <span className="playlist">{albumArtist}</span>

            </li>
        </Link>
    )
}

export default SpotifyPlaylistsCard
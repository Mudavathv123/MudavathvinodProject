
import { Link } from 'react-router-dom';
import './popularAlbams.css'

const AlbumCard = props => {

    const { albumb } = props
    const { albumArtist, albumName, albumImageUrl, albumId } = albumb;


    return (
        <Link to={`albumbs/${albumId}`} className="link">
            <li className="albumb-card-container">
            <div className='play-album-btn-container'>
                <img src={albumImageUrl} alt="albumb" className="albumb-img" />
               
                    <button className="play-album-btn">
                        <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play albumb" className='play-album-img' />
                    </button>
                </div>
                <span className="albumb-name">{albumName}</span>
                <span className="albumb">{albumArtist}</span>

            </li>
        </Link>
    )
}

export default AlbumCard
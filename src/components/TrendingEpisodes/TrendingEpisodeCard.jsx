
import { Link } from 'react-router-dom';
import './trendingEpisodes.css'

const TrendingEpisodeCard = props => {

    const { episode } = props
    const { albumArtist, albumName, albumImageUrl, albumId } = episode;


    return (
        <Link to={`albumbs/${albumId}`} className="link">
            <li className="trending-card-container">
            <div className='play-trending-btn-container'>
                <img src={albumImageUrl} alt="trending" className="trending-img" />
               
                    <button className="play-trending-btn">
                        <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play trending" className='play-trending-img' />
                    </button>
                </div>
                <span className="trending-name">{albumName}</span>
                <span className="trending">{albumArtist}</span>

            </li>
        </Link>
    )
}

export default TrendingEpisodeCard
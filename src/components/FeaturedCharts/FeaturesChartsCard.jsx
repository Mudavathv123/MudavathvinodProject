
import { Link } from 'react-router-dom';
import './featuredCharts.css'

const FeaturesChartsCard = props => {

    const { chart } = props
    const { albumArtist, albumName, albumImageUrl, albumId } = chart;


    return (
        <Link to={`albumbs/${albumId}`} className="link">
            <li className="chart-card-container">
            <div className='play-chart-btn-container'>
                <img src={albumImageUrl} alt="chart" className="chart-img" />
               
                    <button className="play-chart-btn">
                        <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play chart" className='play-chart-img' />
                    </button>
                </div>
                <span className="chart-name">{albumName}</span>
                <span className="chart">{albumArtist}</span>

            </li>
        </Link>
    )
}

export default FeaturesChartsCard
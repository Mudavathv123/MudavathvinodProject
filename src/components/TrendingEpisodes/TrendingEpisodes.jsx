import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import './trendingEpisodes.css'
import { Link } from 'react-router-dom';
import TrendingEpisodeCard from './TrendingEpisodeCard';


const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const TrendingEpisodes = () => {


    const [episodesList, setEpisodesList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/albums")
            const data = await response.json();

            if (response.ok) {
                setEpisodesList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const trendingEpisodeLoadingView = () => (
        <div className="trending-episodes-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const trendingEpisodeFailureView = () => (
        <div className="trending-episodes-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="artist-notfound-img" /> */}
            <h2 className='trending-episodes-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const trendingEpisodeSuccessView = () => (

        <ul className="trending-episodes-list-container">
            {
                episodesList.slice(0,6).map(eachEpisode => <TrendingEpisodeCard key={eachEpisode.albumId} episode={eachEpisode} />)
            }
        </ul>

    )

    const renderTrendingEpisodeView = () => {

        switch (apiViews) {
            case constApiStatus.process: return trendingEpisodeLoadingView();
            case constApiStatus.success: return trendingEpisodeSuccessView();
            case constApiStatus.failure: return trendingEpisodeFailureView();
            default: null
        }

    }

    return (
        <div className="trending-episodes-container">
            <div className="trending-episodes-head-container">
                <h1 className="trending-episodes-head">Trending Episodes</h1>
                <Link to="/section/trendingepiosdes" className='link-to-show-section'>
                    <span className="trending-episodes-showall-link">Show all</span>
                </Link>
            </div>
            {renderTrendingEpisodeView()}
        </div>
    )
}

export default TrendingEpisodes
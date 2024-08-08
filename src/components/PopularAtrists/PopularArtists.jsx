import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import './popularArtists.css'
import ArtistCard from './ArtistCard'
import { Link } from 'react-router-dom';


const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

const PopularArtist = () => {

    const [artistList, setArtistList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {

        async function fetchData() {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/artists")
            const data = await response.json();
            if (response.ok) {
                setArtistList(data);
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }
        fetchData();

    }, [])


    const popularArtistLoadingView = () => (
        <div className="popular-artist-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const popularArtistFailureView = () => (
        <div className="popular-artist-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="artist-notfound-img" /> */}
            <h2 className='notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const popularArtistSuccessView = () => (

        <ul className="popular-artists-list-container">
            {
                artistList.slice(0, 6).map(eachArist => <ArtistCard key={eachArist.artistId} artist={eachArist} />)
            }
        </ul>

    )

    const renderPopularArtistView = () => {

        switch (apiViews) {
            case constApiStatus.process: return popularArtistLoadingView();
            case constApiStatus.success: return popularArtistSuccessView();
            case constApiStatus.failure: return popularArtistFailureView();
            default: null
        }

    }

    return (
        <div className="popular-artist-container">
            <div className="popular-artists-head-container">
                <h1 className="popular-artist-head">Popular artists</h1>
                <Link to="section/allartists" className='link-to-show-section'>
                    <span className="showall-link">Show all</span>
                </Link>
            </div>
            {renderPopularArtistView()}
        </div>
    )

}

export default PopularArtist
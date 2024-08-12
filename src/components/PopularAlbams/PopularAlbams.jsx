import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import './popularAlbams.css'
import AlbumCard from './AlbumCard'
import { Link } from 'react-router-dom';


const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const PopularAlbams = () => {


    const [albumbList, setAlbumbList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/albums")
            // const response = await fetch("http://localhost:8080/albums")
            const data = await response.json();

            if (response.ok) {
                setAlbumbList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const popularAlbumbsLoadingView = () => (
        <div className="popular-albumbs-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const popularAlbumbsFailureView = () => (
        <div className="popular-albumbs-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="artist-notfound-img" /> */}
            <h2 className='albumbs-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const popularAlbumbsSuccessView = () => (

        <ul className="popular-albumb-list-container">
            {
                albumbList.slice(0,6).map(eachAlbumb => <AlbumCard key={eachAlbumb.albumId} albumb={eachAlbumb} />)
            }
        </ul>

    )

    const renderPopularAlbumbsView = () => {

        switch (apiViews) {
            case constApiStatus.process: return popularAlbumbsLoadingView();
            case constApiStatus.success: return popularAlbumbsSuccessView();
            case constApiStatus.failure: return popularAlbumbsFailureView();
            default: null
        }

    }

    return (
        <div className="popular-albams-container">
            <div className="popular-albams-head-container">
                <h1 className="popular-albams-head">Popular albums</h1>
                <Link to="/section/allabumbs" className='link-to-show-section'>
                    <span className="showall-link">Show all</span>
                </Link>
            </div>
            {renderPopularAlbumbsView()}
        </div>
    )
}

export default PopularAlbams
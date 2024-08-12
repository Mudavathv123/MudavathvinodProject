import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './../../../components/sectionPage.css'
import ShowAllTrendingEpisodeCard from './ShowAllTrendingEpisodeCard';

const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const ShowAllTrendingEpisodes = () => {


    const [allEpisodesList, setAllEpisodesList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/albums")
            // const response = await fetch("http://localhost:8080/albums")
            const data = await response.json();
            // console.log(response);
            console.log(data);

            if (response.ok) {
                setAllEpisodesList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const showAllTrendingEpisodesLoadingView = () => (
        <div className="show-allalbum-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const showAllTrendingEpisodesFailureView = () => (
        <div className="show-allalbum-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="show-allalbum-notfound-img" /> */}
            <h2 className='show-allalbum-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const showAllTrendingEpisodesSuccessView = () => (

        <ul className="show-allalbum-list-container">
            {
                allEpisodesList.map(eachEpisode => <ShowAllTrendingEpisodeCard key={eachEpisode.albumId} trendingEpisode={eachEpisode} />)
            }
        </ul>

    )

    const renderShowAllTrendingEpisodesView = () => {

        switch (apiViews) {
            case constApiStatus.process: return showAllTrendingEpisodesLoadingView();
            case constApiStatus.success: return showAllTrendingEpisodesSuccessView();
            case constApiStatus.failure: return showAllTrendingEpisodesFailureView();
            default: null
        }

    }

    return (
        <div className="show-allalbum-container">
            <Header />
            <div className="show-allalbum-songs">
                <div className="show-allalbum-head-container">
                    <h1 className="show-allalbum-head">Trending Episodes</h1>
                </div>
                {renderShowAllTrendingEpisodesView()}
                <Footer />
            </div>
        </div>
    )
}

export default ShowAllTrendingEpisodes
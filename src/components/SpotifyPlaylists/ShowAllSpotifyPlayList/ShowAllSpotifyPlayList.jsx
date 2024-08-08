import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './../../../components/sectionPage.css'
import ShowAllSpotifyPlayListCard from './ShowAllSpotifyPlayListCard';

const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const ShowAllSpotifyPlayList = () => {


    const [allPlayList, setAllPlayList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/albums")
            const data = await response.json();
            // console.log(response);
            console.log(data);

            if (response.ok) {
                setAllPlayList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const showAllSpotifyPlaylistLoadingView = () => (
        <div className="show-allalbum-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const showAllSpotifyPlaylistFailureView = () => (
        <div className="show-allalbum-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="show-allalbum-notfound-img" /> */}
            <h2 className='show-allalbum-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const showAllSpotifyPlaylistSuccessView = () => (

        <ul className="show-allalbum-list-container">
            {
                allPlayList.map(eachPlaylist => <ShowAllSpotifyPlayListCard key={eachPlaylist.albumId} playlist={eachPlaylist} />)
            }
        </ul>

    )

    const renderShowAllSpotifyPlaylistView = () => {

        switch (apiViews) {
            case constApiStatus.process: return showAllSpotifyPlaylistLoadingView();
            case constApiStatus.success: return showAllSpotifyPlaylistSuccessView();
            case constApiStatus.failure: return showAllSpotifyPlaylistFailureView();
            default: null
        }

    }

    return (
        <div className="show-allalbum-container">
            <Header />
            <div className="show-allalbum-songs">
                <div className="show-allalbum-head-container">
                    <h1 className="show-allalbum-head">Spotify Playlist</h1>
                </div>
                {renderShowAllSpotifyPlaylistView()}
                <Footer />
            </div>
        </div>
    )
}

export default ShowAllSpotifyPlayList
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import './spotifyPlaylists.css'
import { Link } from 'react-router-dom';
import SpotifyPlaylistsCard from './SpotifyPlaylistsCard';


const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const SpotifyPlaylists = () => {


    const [playList, setPlayList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/albums")
            // const response = await fetch("http://localhost:8080/albums")
            const data = await response.json();

            if (response.ok) {
                setPlayList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const spotifyPlaylistLoadingView = () => (
        <div className="spotify-playlist-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const spotifyPlaylistFailureView = () => (
        <div className="spotify-playlist-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="artist-notfound-img" /> */}
            <h2 className='spotify-playlist-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const spotifyPlaylistSuccessView = () => (

        <ul className="spotify-playlist-list-container">
            {
                playList.slice(0,6).map(eachPlaylist => <SpotifyPlaylistsCard key={eachPlaylist.albumId} playlist={eachPlaylist} />)
            }
        </ul>

    )

    const renderSpotifyPlaylistView = () => {

        switch (apiViews) {
            case constApiStatus.process: return spotifyPlaylistLoadingView();
            case constApiStatus.success: return spotifyPlaylistSuccessView();
            case constApiStatus.failure: return spotifyPlaylistFailureView();
            default: null
        }

    }

    return (
        <div className="spotify-playlist-container">
            <div className="spotify-playlist-head-container">
                <h1 className="spotify-playlist-head">Spotify Playlists</h1>
                <Link to="/section/playlists" className='link-to-show-section'>
                    <span className="spotify-playlist-showall-link">Show all</span>
                </Link>
            </div>
            {renderSpotifyPlaylistView()}
        </div>
    )
}

export default SpotifyPlaylists
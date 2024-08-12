import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { TfiMoreAlt } from "react-icons/tfi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { BeatLoader } from 'react-spinners';

import '../../specificpage.css'
import Header from './../../Header/Header'
import Footer from "./../../Footer/Footer";
import PopularRadioes from "./PopularRadioes";

const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

const SpecificPopularRadio = () => {

    const [radioInfo, setRadioInfo] = useState({})
    const [specificAlbumApiStatus, setSpecificAlbumApiStatus] = useState(constApiStatus.intitial);


    const { id } = useParams()


    useEffect(() => {

        const fetchAlbumbData = async () => {
            setSpecificAlbumApiStatus(constApiStatus.process);

            const response = await fetch(`https://spotifycloneb.onrender.com/radioes/${id}`)
            // const response = await fetch(`http://localhost:8080/radioes/${id}`)
            const albumbsData = await response.json();
            if (response.ok) {
                setRadioInfo(albumbsData);
                setSpecificAlbumApiStatus(constApiStatus.success)
            } else {
                setSpecificAlbumApiStatus(constApiStatus.failure)
            }
        }

        fetchAlbumbData();
    }, [])

    const radioSongsListView = () => {
        if (!radioInfo?.radioSongs) return null;

        const { radioSongs } = radioInfo;

        return (
            <>
                <div className="songs-playlist-head-container">
                    <div className="play-all-container">
                        <button className="play-all-btn">
                            <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play all" className="playall-img" />
                        </button>
                        <span className="favirote-icon"><MdFavoriteBorder size="28" /></span>
                        <span className="more-icon"><TfiMoreAlt size="28" /></span>
                    </div>
                    <button className="list-filter-btn">
                        List <FaListUl size="12" />
                    </button>
                </div>

                <div className="albumbs-songs-list-container">
                    <PopularRadioes radioes = {radioSongs}/>
                </div>
            </>
        )
    }

    const popularRadioHeadRender = () => {

        if (!radioInfo) return null;

        const { artistName, radioImage, moreArtistName, radioBgColor,
            radioHeaderBgColor, songsSaves, radioSongs } = radioInfo

        const [min, sec] = "1:0" || "00:00".split(":");

        const bgColorForAlbumHead = {
            background: `linear-gradient(to bottom, ${radioBgColor} , ${radioHeaderBgColor})`
        };

        const bgColorForSongsList = {
            background: `linear-gradient(to top, #000, #000,${radioHeaderBgColor} )`
        };


        const concertToHMS = (seconds) => {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60) ;
            const secs = Math.floor(seconds % 60);
    
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            const formattedSeconds = secs < 10 ? '0' + secs : secs;
    
            if(hours != 0) return hours +" hr " +formattedMinutes +" min ";
            else if(minutes != 0) return minutes +" min " +formattedSeconds +" sec "
            else return null;
        }
    
        const findTotalDurationOfSongs = (songs) => {
            let totalSeconds = 0;
             songs.forEach(eachSong => {
                const duration = eachSong.songDuration.split(":");
                
                const min = parseInt(duration[0],10);
                const sec = parseInt(duration[1],10);
    
                totalSeconds += (min * 60) + sec;
            })
            return concertToHMS(totalSeconds);
        }

        let totalSeconds = findTotalDurationOfSongs(radioSongs);

        return (

            <div className="scroll-albums-songs">
                <div className="specific-album-head-container" style={bgColorForAlbumHead} >
                    <img src={radioImage} alt="albumb head" className="album-head-img" />
                    <div className="albumb-head-items-container">
                        <p className="album-type">Playlist</p>
                        <h1 className="albumb-heading">{artistName}</h1>
                        <p className="moreartist-name">{moreArtistName}</p>
                        <div className="albumb-duration-container">
                            <span className="album-artist-name">Spotify</span>
                            <ul className="album-head-description-list">
                                <li><span className="save-songs">{songsSaves} saves</span></li>
                                {
                                    radioSongs.length !== 0 && <li className="songs-total">{radioSongs.length} Songs, <span className="total-songs">about {totalSeconds} </span></li>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="songs-container" style={bgColorForSongsList}>
                    {radioSongsListView()}
                </div>
                <Footer />
            </div>

        )
    }

    const specificPopularRadioProcessView = () => (
        <div className="specific-album-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const specificPopularRadioSuccessView = () => popularRadioHeadRender();

    const specificPopularRadioFailureView = () => (
        <div className="specific-album-failure-view-container">
            <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="specific-album-notfound-img" />
            <h2 className='specific-album-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const specificPopularRadioRenderView = () => {
        switch (specificAlbumApiStatus) {
            case constApiStatus.process: return specificPopularRadioProcessView();
            case constApiStatus.success: return specificPopularRadioSuccessView();
            case constApiStatus.failure: return specificPopularRadioFailureView();
            default: null;
        }
    }

    return (

        <div className="specific-albumb-container" >
            <Header albumbHeaderBgColor={radioInfo.radioHeaderBgColor} />
            {specificPopularRadioRenderView()}
        </div>
    )

}

export default SpecificPopularRadio
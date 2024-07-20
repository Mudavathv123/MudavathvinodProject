import { defer, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { TfiTimer, TfiMoreAlt } from "react-icons/tfi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { BeatLoader } from 'react-spinners';

import './specificAlbumb.css'
import Header from '../Header/Header'
import Songs from "./Songs"
import Footer from "../Footer/Footer";

const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

const SpecificAlbumb = () => {

    const [albumbInfo, setAlbumbInfo] = useState({})
    const [specificAlbumApiStatus, setSpecificAlbumApiStatus] = useState(constApiStatus.intitial);


    const { id } = useParams()


    useEffect(() => {

        const fetchAlbumbData = async () => {
            setSpecificAlbumApiStatus(constApiStatus.process);

            const response = await fetch(`http://localhost:8080/albums/${id}`)
            const albumbsData = await response.json();
            if (response.ok) {
                setAlbumbInfo(albumbsData);
                setSpecificAlbumApiStatus(constApiStatus.success)
            } else {
                setSpecificAlbumApiStatus(constApiStatus.failure)
            }
        }

        fetchAlbumbData();
    }, [])

    const albumSongsListView = () => {
        if (!albumbInfo?.songs) return null;

        const { songs } = albumbInfo;

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

                <ul className="albumbs-songs-list-container">
                    <li className="song-list-container">
                        <div className="title-and-number-container">
                            <span className="row-number">#</span>
                            <span className="title-head">Title</span>
                        </div>
                        <span className="song-duration"><TfiTimer size="20" /></span>
                    </li>
                    <hr className="line" />
                    {
                        songs.map((eachSong, index) => <Songs key={eachSong.songId} song={eachSong} rowNumber={index + 1} />)
                    }
                </ul>
            </>
        )
    }

    const albumbHeadRender = () => {

        if (!albumbInfo) return null;

        const { albumArtist, albumImageUrl, albumName, albumbBgColor, totalDurartion,
            albumbHeaderBgColor, releaseDate, totalSongs,songs } = albumbInfo

        const date = new Date(releaseDate);

        const [min, sec] = totalDurartion || "00:00".split(":");

        const bgColorForAlbumHead = {
            background: `linear-gradient(to bottom, ${albumbBgColor} , ${albumbHeaderBgColor})`
        };

        const bgColorForSongsList = {
            background: `linear-gradient(to top, #000, #000,${albumbHeaderBgColor} )`
        };

        return (

            <div className="scroll-albums-songs">
                <div className="specific-album-head-container" style={bgColorForAlbumHead} >
                    <img src={albumImageUrl} alt="albumb head" className="album-head-img" />
                    <div className="albumb-head-items-container">
                        <p className="album-type">album</p>
                        <h1 className="albumb-heading">{albumName}</h1>
                        <div className="albumb-duration-container">
                            <span className="album-artist-name">{albumArtist}</span>
                            <ul className="album-head-description-list">
                                <li><span className="release-date">{date.getFullYear()}</span></li>
                                {
                                    songs.length!== 0 &&<li><span className="total-songs">{songs.length} Songs, {min} min {sec} sec </span></li>
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="songs-container" style={bgColorForSongsList}>
                    {albumSongsListView()}
                </div>
                <Footer />
            </div>

        )
    }

    const specificAlbumProcessView = () => (
        <div className="specific-album-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const specificAlbumSuccessView = () => albumbHeadRender();

    const specificAlbumFailureView = () => (
        <div className="specific-album-failure-view-container">
            <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="specific-album-notfound-img" />
            <h2 className='specific-album-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const specificAlbumRenderView = () => {
        switch (specificAlbumApiStatus) {
            case constApiStatus.process: return specificAlbumProcessView();
            case constApiStatus.success: return specificAlbumSuccessView();
            case constApiStatus.failure: return specificAlbumFailureView();
            default: null;
        }
    }

    return (

        <div className="specific-albumb-container" >
            <Header albumbHeaderBgColor={albumbInfo.albumbHeaderBgColor} />
            {specificAlbumRenderView()}
        </div>
    )

}

export default SpecificAlbumb
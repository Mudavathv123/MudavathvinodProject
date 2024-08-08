import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import './showAllArtist.css'
import ShowAllArtistCard from './ShowAllArtistCard'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

const ShowAllArtist = () => {

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


    const ShowAllArtistadingView = () => (
        <div className="show-all-artists-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const ShowAllArtistilureView = () => (
        <div className="show-all-artists-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="artist-notfound-img" /> */}
            <h2 className='notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const ShowAllArtistccessView = () => (

        <ul className="show-all-artists-list-container">
            {
                artistList.map(eachArist => <ShowAllArtistCard key={eachArist.artistId} artist={eachArist} />)
            }
        </ul>

    )

    const renderShowAllArtistview = () => {

        switch (apiViews) {
            case constApiStatus.process: return ShowAllArtistadingView();
            case constApiStatus.success: return ShowAllArtistccessView();
            case constApiStatus.failure: return ShowAllArtistilureView();
            default: null
        }

    }

    return (
        <div className="show-all-artists-container">
            <Header />
            <div className='show-all-artists-songs'>
                <div className="show-all-artists-head-container">
                    <h1 className="show-all-artists-head">Popular artists</h1>
                </div>
                {renderShowAllArtistview()}
                <Footer />
            </div>
        </div>
    )

}

export default ShowAllArtist
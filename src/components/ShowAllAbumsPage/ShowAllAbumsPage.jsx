import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import ShowAllAbumCard from './ShowAllAlbumCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../components/sectionPage.css'

const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const ShowAllAbumsPage = () => {


    const [albumbList, setAlbumbList] = useState([])
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
                setAlbumbList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const popularAlbumbsLoadingView = () => (
        <div className="show-allalbum-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const popularAlbumbsFailureView = () => (
        <div className="show-allalbum-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="show-allalbum-notfound-img" /> */}
            <h2 className='show-allalbum-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const popularAlbumbsSuccessView = () => (

        <ul className="show-allalbum-list-container">
            {
                albumbList.map(eachAlbumb => <ShowAllAbumCard key={eachAlbumb.albumId} albumb={eachAlbumb} />)
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
        <div className="show-allalbum-container">
            <Header />
            <div className="show-allalbum-songs">
                <div className="show-allalbum-head-container">
                    <h1 className="show-allalbum-head">Popular albums</h1>
                </div>
                {renderPopularAlbumbsView()}
                <Footer />
            </div>
        </div>
    )
}

export default ShowAllAbumsPage
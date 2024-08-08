import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './../../../components/sectionPage.css'
import ShowAllFeaturedChartsCard from './ShowAllFeaturedChartsCard';

const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const ShowAllFeaturedCharts = () => {


    const [allChartsList, setAllChartsList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/albums")
            const data = await response.json();
            // console.log(response);
            console.log(data);

            if (response.ok) {
                setAllChartsList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const showAllFeaturedChartsLoadingView = () => (
        <div className="show-allalbum-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const showAllFeaturedChartsFailureView = () => (
        <div className="show-allalbum-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="show-allalbum-notfound-img" /> */}
            <h2 className='show-allalbum-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const showAllPopularRadioSuccessView = () => (

        <ul className="show-allalbum-list-container">
            {
                allChartsList.map(eachChart => <ShowAllFeaturedChartsCard key={eachChart.albumId} chart={eachChart} />)
            }
        </ul>

    )

    const renderShowAllFeaturedChartsView = () => {

        switch (apiViews) {
            case constApiStatus.process: return showAllFeaturedChartsLoadingView();
            case constApiStatus.success: return showAllPopularRadioSuccessView();
            case constApiStatus.failure: return showAllFeaturedChartsFailureView();
            default: null
        }

    }

    return (
        <div className="show-allalbum-container">
            <Header />
            <div className="show-allalbum-songs">
                <div className="show-allalbum-head-container">
                    <h1 className="show-allalbum-head">Featured Charts</h1>
                </div>
                {renderShowAllFeaturedChartsView()}
                <Footer />
            </div>
        </div>
    )
}

export default ShowAllFeaturedCharts
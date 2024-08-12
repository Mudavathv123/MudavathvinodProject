import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import FeaturesChartsCard from './FeaturesChartsCard.jsx';
import './featuredCharts.css';

const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const FeaturedCharts = () => {


    const [chartsList, setChartsList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/albums")
            // const response = await fetch("http://localhost:8080/albums")
            const data = await response.json();

            if (response.ok) {
                setChartsList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const featuredChartsLoadingView = () => (
        <div className="featured-charts-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const featuredChartsFailureView = () => (
        <div className="featured-charts-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="artist-notfound-img" /> */}
            <h2 className='albumbs-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const featuredChartsSuccessView = () => (

        <ul className="featured-charts-list-container">
            {
                chartsList.slice(0,6).map(eachChart => <FeaturesChartsCard key={eachChart.albumId} chart={eachChart} />)
            }
        </ul>

    )

    const featuredChartsAlbumbsView = () => {

        switch (apiViews) {
            case constApiStatus.process: return featuredChartsLoadingView();
            case constApiStatus.success: return featuredChartsSuccessView();
            case constApiStatus.failure: return featuredChartsFailureView();
            default: null
        }

    }

    return (
        <div className="featured-charts-container">
            <div className="featured-charts-head-container">
                <h1 className="featured-charts-head">Featured Charts</h1>
                <Link to="/section/allcharts" className='link-to-show-section'>
                    <span className="featured-charts-showall-link">Show all</span>
                </Link>
            </div>
            {featuredChartsAlbumbsView()}
        </div>
    )
}

export default FeaturedCharts
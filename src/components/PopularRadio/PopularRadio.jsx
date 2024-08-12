import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import PopularRadioCard from './PopularRadioCard';
import './popularRadio.css'


const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const PopularRadio = () => {


    const [radioList, setRadioList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/radioes")
            // const response = await fetch("http://localhost:8080/radioes")
            const data = await response.json();

            if (response.ok) {
                setRadioList(data)
                setApiView(constApiStatus.success);
                console.log(data)
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const popularRadioLoadingView = () => (
        <div className="popular-radio-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const popularRadioFailureView = () => (
        <div className="popular-radio-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="artist-notfound-img" /> */}
            <h2 className='albumbs-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const popularRadioSuccessView = () => (

        <ul className="popular-radio-list-container">
            {
                radioList.slice(0,6).map(eachRadio => <PopularRadioCard key={eachRadio.radioId} radio={eachRadio} />)
            }
        </ul>

    )

    const renderPopularRadioView = () => {

        switch (apiViews) {
            case constApiStatus.process: return popularRadioLoadingView();
            case constApiStatus.success: return popularRadioSuccessView();
            case constApiStatus.failure: return popularRadioFailureView();
            default: null
        }

    }

    return (
        <div className="popular-radio-container">
            <div className="popular-radio-head-container">
                <h1 className="popular-radio-head">Popular radio</h1>
                <Link to="/section/allradioes" className='radio-link-to-show-section'>
                    <span className="radio-showall-link">Show all</span>
                </Link>
            </div>
            {renderPopularRadioView()}
        </div>
    )
}

export default PopularRadio
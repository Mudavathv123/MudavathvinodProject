import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import ShowAllPopularRadioCard from './ShowAllPopularRadioCard';
import './../../../components/sectionPage.css'

const constApiStatus = {
    intitial: "INITIAL",
    process: "PROCESS",
    success: "SUCCESS",
    failure: "FAILURE"
}


const ShowAllPopularRadio = () => {


    const [allRadioList, setAllRadioList] = useState([])
    const [apiViews, setApiView] = useState(constApiStatus.intitial)

    useEffect(() => {
        const fetchData = async () => {

            setApiView(constApiStatus.process);
            const response = await fetch("https://spotifycloneb.onrender.com/radioes")
            // const response = await fetch("http://localhost:8080/radioes")
            const data = await response.json();
            // console.log(response);
            console.log(data);

            if (response.ok) {
                setAllRadioList(data)
                setApiView(constApiStatus.success);
            } else {
                setApiView(constApiStatus.failure);
            }
        }

        fetchData()
    }, [])



    const showAllPopularRadioLoadingView = () => (
        <div className="show-allalbum-loading-view">
            <BeatLoader color="#ffffff" />
        </div>
    )

    const showAllPopularRadioFailureView = () => (
        <div className="show-allalbum-failure-view-container">
            {/* <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721316967/MyMiniProjectsImages/hh8dcfjhxjfwerfdoato.png" alt="artist notfound" className="show-allalbum-notfound-img" /> */}
            <h2 className='show-allalbum-notfound-head'>Opps! Data notfound</h2>
        </div>
    )

    const showAllPopularRadioSuccessView = () => (

        <ul className="show-allalbum-list-container">
            {
                allRadioList.map(eachRadio => <ShowAllPopularRadioCard key={eachRadio.radioId} radio={eachRadio} />)
            }
        </ul>

    )

    const renderShowAllPopularRadioView = () => {

        switch (apiViews) {
            case constApiStatus.process: return showAllPopularRadioLoadingView();
            case constApiStatus.success: return showAllPopularRadioSuccessView();
            case constApiStatus.failure: return showAllPopularRadioFailureView();
            default: null
        }

    }

    return (
        <div className="show-allalbum-container">
            <Header />
            <div className="show-allalbum-songs">
                <div className="show-allalbum-head-container">
                    <h1 className="show-allalbum-head">Popular radio</h1>
                </div>
                {renderShowAllPopularRadioView()}
                <Footer />
            </div>
        </div>
    )
}

export default ShowAllPopularRadio
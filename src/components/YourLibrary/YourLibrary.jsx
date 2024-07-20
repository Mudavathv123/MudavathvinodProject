import { IoLibrary } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import {v4 as uuid4} from 'uuid'
import './yourLibrary.css'
import { FaAudioDescription } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import LibraryCard from "./LibraryCard";


const libraryCardList = [
    {
        uniqueId : uuid4(),
        headText : "Create your first playlist",
        description : "It's easy, we'll help you",
        cardBtn : "Create playlist"
    },
    {
        uniqueId : uuid4(),
        headText : "Let's find some podcasts to follow",
        description : "we'll keep you updated on new episodes",
        cardBtn : "Browse podcasts"
    }
]
const YourLibrary = () => (
    <div className="your-library-container">
        <div className = "library-header-container">
            <div className="library">
                <IoLibrary size= "24" />
                <span className="library-header">Your Library</span>
            </div>
            <button className="add-btn">
                <BsPlusLg size= "24" />
            </button>
        </div>
        <ul className = "library-card">
            {
                libraryCardList.map(eachLibraryCard => 
                <LibraryCard key = {eachLibraryCard.uniqueId} libraryCard = {eachLibraryCard}/>)
            }
        </ul>
        <ul className = "your-library-footer-list">
            <li className = "library-footer-list-items">Legal</li>
            <li className = "library-footer-list-items">Safety & Privacy Center</li>
            <li className = "library-footer-list-items">Privacy Policy</li>
            <li className = "library-footer-list-items">Cookies</li>
            <li className = "library-footer-list-items">About Ads</li>
            <li className = "library-footer-list-items">Accessibility</li>
            <li className = "library-footer-list-items">Cookies</li>
        </ul>
        <button className = "library-footer-btn">
            <CiGlobe size="20"/> English
        </button>
    </div>
)

export default YourLibrary
import { IoMdHome } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import './sidebar.css'

const Sidebar = () => (
    <div className = "sidebar-container">
        <div className = "logo-container">
            <FaSpotify size="24"/><span className = "logo-name">Spotify'</span>
        </div>
        <ul className = "sidebar-list-container">
            <li className = "sidebar-list-item">
                <IoMdHome  size = "24" /> Home
            </li>
            <li className = "sidebar-list-item">
                <FiSearch size = "24" /> Search
            </li>
        </ul>
    </div>
)

export default Sidebar;
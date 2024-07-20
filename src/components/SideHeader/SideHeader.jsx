import Sidebar from '../Sidebar/Sidebar'
import YourLibrary from '../YourLibrary/YourLibrary'
import './sideHeader.css'

const SideHeader = () => (
    <div className="side-header-container">
        <Sidebar />
        <YourLibrary />
    </div>
)

export default SideHeader
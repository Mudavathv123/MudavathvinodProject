
import Header from '../Header/Header'
import PopularArtists from '../PopularAtrists/PopularArtists'
import PopularAlbams from '../PopularAlbams/PopularAlbams'
import Footer from '../Footer/Footer';
import './home.css'

const Home = () => (
    <div className="home-container">
        <div className="music-container">
            <Header />
            <div className="music-section-container">
                <PopularArtists />
                <PopularAlbams />
                <Footer />
            </div>
        </div>
    </div>
)

export default Home
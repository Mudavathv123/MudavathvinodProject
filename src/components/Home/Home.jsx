
import Header from '../Header/Header'
import PopularArtists from '../PopularAtrists/PopularArtists'
import PopularAlbams from '../PopularAlbams/PopularAlbams'
import PopularRadio from '../PopularRadio/PopularRadio';
import Footer from '../Footer/Footer';
import './home.css'
import FeaturedCharts from '../FeaturedCharts/FeaturedCharts';
import SpotifyPlaylists from '../SpotifyPlaylists/SpotifyPlaylists';
import TrendingEpisodes from '../TrendingEpisodes/TrendingEpisodes';


const Home = () => (
    <div className="home-container">
        <div className="music-container">
            <Header />
            <div className="music-section-container">
                <PopularArtists />
                <PopularAlbams />
                <PopularRadio />
                <FeaturedCharts />
                <SpotifyPlaylists/>
                <TrendingEpisodes />
                <Footer />
            </div>
        </div>
    </div>
)

export default Home
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import SpecificAlbumb from './components/SpecificAlbumb/SpecificAlbumb.jsx'
import ShowAllAbumsPage from './components/ShowAllAbumsPage/ShowAllAbumsPage.jsx'
import ShowAllArtist from './components/ShowAllArtists/ShowAllArtist.jsx'
import ShowAllPopularRadio from './components/PopularRadio/ShowAllPopularRadio/ShowAllPopularRadio.jsx'
import ShowAllFeaturedCharts from './components/FeaturedCharts/ShowAllFeaturedCharts/ShowAllFeaturedCharts.jsx'
import ShowAllSpotifyPlayList from './components/SpotifyPlaylists/ShowAllSpotifyPlayList/ShowAllSpotifyPlayList.jsx'
import ShowAllTrendingEpisodes from './components/TrendingEpisodes/ShowAllTrendingEpisodes/ShowAllTrendingEpisodes.jsx'
import SpecificPopularRadio from './components/PopularRadio/SpecificPopularRadio/SpecificPopularRadio.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "",
        index:true,
        element: <Home />
      },
      {
        path: "albumbs/:id",
        element: <SpecificAlbumb />
      },
      {
        path: "radio/:id",
        element: <SpecificPopularRadio />
      },
      {
        path: "section/allartists",
        element: <ShowAllArtist />
      },
      {
        path: "section/allabumbs",
        element: <ShowAllAbumsPage />
      },
      {
        path: "section/allradioes",
        element: <ShowAllPopularRadio />
      },
      {
        path: "section/allcharts",
        element: <ShowAllFeaturedCharts />
      },
      {
        path: "section/playlists",
        element: <ShowAllSpotifyPlayList />
      },
      {
        path: "section/trendingepiosdes",
        element: <ShowAllTrendingEpisodes />
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import SpecificAlbumb from './components/SpecificAlbumb/SpecificAlbumb.jsx'
import ShowAllAbumsPage from './components/ShowAllAbumsPage/ShowAllAbumsPage.jsx'
import ShowAllArtist from './components/ShowAllArtists/ShowAllArtist.jsx'

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
        path: "section/allartists",
        element: <ShowAllArtist />
      },
      {
        path: "section/allabumbs",
        element: <ShowAllAbumsPage />
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

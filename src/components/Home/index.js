// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="Home-container">
        <Header />
        <div className="home-blog-container">
          <div className="in-blog-container">
            <h1 className="homepage-heading">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="small-device-img"
            />
            <p className="homepage-content">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time, Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shop-now-btn" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="small-large-img"
          />
        </div>
      </div>
    )
  }
}

export default Home

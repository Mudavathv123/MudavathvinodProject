// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencies: [], isLoader: true}
  componentDidMount() {
    this.getFetchedData()
  }

  getFetchedData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updateFetechedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))

    this.setState({cryptocurrencies: updateFetechedData, isLoader: false})
  }

  render() {
    const {cryptocurrencies, isLoader} = this.state
    return (
      <div className="crypocurreny-list">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="crypocurreny-head">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency-img"
            />

            <div className="list">
              <li className="item-head">
                <p className="type">Coin Type</p>
                <div className="head-para">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </li>
              <ul className="crypocurreny-items-container">
                {cryptocurrencies.map(eachCurrency => (
                  <CryptocurrencyItem
                    currency={eachCurrency}
                    key={eachCurrency.id}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList

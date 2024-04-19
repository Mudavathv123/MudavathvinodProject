// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currency} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currency
  return (
    <li className="cryptocurrency-item">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="logo-name">{currencyName}</p>
      </div>
      <div className="dolor-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

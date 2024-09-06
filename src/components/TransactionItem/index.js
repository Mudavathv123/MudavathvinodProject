// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetail} = props
  const {id, title, amount, type} = transactionDetail

  const transactionRemoved = () => {
    const {removeTransaction} = props
    removeTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button
        className="delete-button"
        data-testid="delete"
        type="button"
        onClick={transactionRemoved}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem

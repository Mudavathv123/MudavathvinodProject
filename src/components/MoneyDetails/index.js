// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeBalalance, expensesBalance, totalBalance} = props
  return (
    <>
      <li className="list-item list-bg1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="balance-container">
          <p className="balance-head">Your Balance</p>
          <p className="balance" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </li>
      <li className="list-item list-bg2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="balance-container">
          <p className="balance-head">Your Income</p>
          <p className="balance" data-testid="incomeAmount">
            Rs {incomeBalalance}
          </p>
        </div>
      </li>
      <li className="list-item list-bg3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="balance-container">
          <p className="balance-head">Your Expenses</p>
          <p className="balance" data-testid="expensesAmount">
            Rs {expensesBalance}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
  }

  onChangeTextInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmountInput = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeTypeInput = event => {
    this.setState({
      typeInput: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === typeInput,
    )

    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevTransaction => ({
      transactionList: [...prevTransaction.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  removeTransaction = id => {
    const {transactionList} = this.state

    const updatedTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  getIncome = () => {
    const {transactionList} = this.state

    let incomeBalalance = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText)
        incomeBalalance += eachTransaction.amount
    })
    return incomeBalalance
  }

  getExpenses = () => {
    const {transactionList} = this.state

    let expensesBalance = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText)
        expensesBalance += eachTransaction.amount
    })
    return expensesBalance
  }

  getTotalBalance = () => {
    const {transactionList} = this.state
    let totalBalance = 0
    let expensesBalance = 0
    let incomeBalalance = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText)
        incomeBalalance += eachTransaction.amount
      else expensesBalance += eachTransaction.amount
    })
    totalBalance = incomeBalalance - expensesBalance
    return totalBalance
  }

  render() {
    const {titleInput, amountInput, typeInput, transactionList} = this.state
    const incomeBalalance = this.getIncome()
    const expensesBalance = this.getExpenses()
    const totalBalance = this.getTotalBalance()

    return (
      <div className="moneyManager-container">
        <div className="card-conatiner">
          <h1 className="card-head">Hi, Richard</h1>
          <p className="card-para">
            Welcome back to your
            <span className="card-span"> Money Manager</span>
          </p>
        </div>
        <ul className="moneyDetails-container">
          <MoneyDetails
            incomeBalalance={incomeBalalance}
            expensesBalance={expensesBalance}
            totalBalance={totalBalance}
          />
        </ul>
        <div className="form-container">
          <form className="form" onSubmit={this.onAddTransaction}>
            <h1 className="form-head">Add Transaction</h1>
            <div className="input-container">
              <label htmlFor="titleInput">TITLE</label>
              <br />
              <input
                type="text"
                className="title-input"
                id="titleInput"
                placeholder="TITLE"
                onChange={this.onChangeTextInput}
                value={titleInput}
              />
            </div>
            <div className="input-container">
              <label htmlFor="amountInput">AMOUNT</label>
              <br />
              <input
                type="text"
                className="amount-input"
                id="amountInput"
                placeholder="AMOUNT"
                onChange={this.onChangeAmountInput}
                value={amountInput}
              />
            </div>
            <div className="input-container">
              <label htmlFor="typeInput">Type</label>
              <br />
              <select
                id="typeInput"
                onChange={this.onChangeTypeInput}
                value={typeInput}
              >
                {transactionTypeOptions.map(eachTransactionType => (
                  <option
                    key={eachTransactionType.optionId}
                    value={eachTransactionType.optionId}
                  >
                    {eachTransactionType.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-head">History</h1>
            <ul className="table-container">
              <li className="table-names">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  transactionDetail={eachTransaction}
                  key={eachTransaction.id}
                  removeTransaction={this.removeTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

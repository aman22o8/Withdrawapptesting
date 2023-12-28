// Write your code here
import './index.css'
import {Component} from 'react'
import DominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {initialAmount: 2000}

  valuedButton = value => {
    const {initialAmount} = this.state
    if (initialAmount > 0) {
      this.setState(prevState => ({
        initialAmount: prevState.initialAmount - value,
      }))
    }
  }

  render() {
    const {initialAmount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main_container">
        <div className="card_container">
          <div className="header_container">
            <p className="short_name">S</p>
            <p className="full_name">Sarah Williams</p>
          </div>
          <div className="middle_container">
            <p className="your_bal">Your Balance</p>
            <div className="my_ruppees">
              <p className="ruppee">{initialAmount}</p>
              <p className="in_ruppee">In Ruppees</p>
            </div>
          </div>
          <p className="domination_heading">Withdraw</p>
          <p className="domination_desc">CHOOSE SUM (IN RUPEES)</p>

          <ul className="domination_list">
            {denominationsList.map(each => (
              <DominationItem
                eachList={each}
                mybutton={this.valuedButton}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

// Write your code here
import './index.css'

const DominationItem = props => {
  const {eachList, mybutton} = props
  const {value} = eachList
  const valuedButton = () => {
    mybutton(value)
  }

  return (
    <li>
      <button type="button" onClick={valuedButton} className="my_btn">
        {value}
      </button>
    </li>
  )
}

export default DominationItem

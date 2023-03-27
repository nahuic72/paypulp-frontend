import 'Styles/Inputs.css'
import ArrowRight from './Icons/ArrowRight'

const FakeTextInput = ({ name, label, value }) => {
  return (
    <div className="text-input__wrapper">
      <label htmlFor={name}>{label}</label>
      <span className="fake-input__currency">€</span>
      <input type="text" name={name} defaultValue={value} disabled={true} />
      <button className="btn home-funds__transactions-btn">
        <ArrowRight />
      </button>
    </div>
  )
}

export default FakeTextInput

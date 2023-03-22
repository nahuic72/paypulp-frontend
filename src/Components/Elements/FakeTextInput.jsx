import 'Styles/Inputs.css'

const FakeTextInput = ({ name, label, value }) => {
  return (
    <div className="text-input__wrapper">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} value={value} disabled={true} />
      <button className="btn home-funds__transactions-btn">&gt;</button>
    </div>
  )
}

export default FakeTextInput

import 'Styles/Inputs.css'

const CheckboxInput = ({ name, label }) => {
  return (
    <div className="checkbox-input__wrapper">
      <input type="checkbox" name={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default CheckboxInput

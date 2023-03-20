import 'Styles/Inputs.css'

const TextInput = ({ name, label, register, validationType }) => {
  return (
    <div className="text-input__wrapper">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} {...register(name, validationType)} />
      {name === 'email' && <div>E</div>}
      {name === 'password' && <div>P</div>}
    </div>
  )
}

export default TextInput

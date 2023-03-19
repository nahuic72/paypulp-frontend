const FundsInput = ({ name, label, register, validationType }) => {
  return (
    <div className="funds-input__wrapper">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} /* {...register(name, validationType)} */ />
    </div>
  )
}

export default FundsInput

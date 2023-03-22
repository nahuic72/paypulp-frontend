const FundsInput = ({ name, label, isDisabled = false, register, validationType }) => {
  return (
    <div className="funds-input__wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        disabled={isDisabled} /* {...register(name, validationType)} */
      />
    </div>
  )
}

export default FundsInput

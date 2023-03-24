const FundsInput = ({ name, label, isDisabled = false, handleChange = null }) => {
  return (
    <div className="funds-input__wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        className="funds-input"
        type="number"
        name={name}
        disabled={isDisabled}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default FundsInput

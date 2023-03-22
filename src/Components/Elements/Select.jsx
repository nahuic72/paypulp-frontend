import 'Styles/Inputs.css'

const Select = ({ name, label, register, validationType, categories, selected }) => {
  return (
    <div className="text-input__wrapper">
      <label htmlFor={name}>{label}</label>
      <select
        className="select-input__wrapper"
        type="text"
        name={name}
        {...register(name, validationType)}>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

import { signupSchema } from 'Helpers/validationSchemas'
import TextInput from 'Components/Elements/TextInput'
import Select from 'Components/Elements/Select'
import { useNavigate } from 'react-router-dom'
import TextHeader from 'Components/Elements/TextHeader'
const Registration2 = ({ register, setPage, watch, errors, isValid }) => {
  const schema = signupSchema(watch)
  const { shortText, longText } = schema
  const navigate = useNavigate()

  const genderOptions = [
    { name: 'No binarie', id: 1 },
    { name: 'Género no conforme', id: 2 },
    { name: 'Mujer', id: 3 },
    { name: 'Hombre', id: 4 },
    { name: 'No me siento identificade', id: 5 },
    { name: 'Prefiero no contestar', id: 6 },
  ]

  const goToRegistration1 = () => {
    setPage(1)
  }

  return (
    <>
      <TextHeader text="Completa tu información" navigate={goToRegistration1} />

      <div className="signup__form">
        <div className="signup-form__inputs">
          <Select
            name="gender"
            label="Género:"
            register={register}
            validationType={shortText}
            errors={errors}
            categories={genderOptions}
          />
          <TextInput
            name="birthDate"
            label="Fecha de Nacimiento:"
            register={register}
            validationType={longText}
            errors={errors}
            placeholder="dd-mm-aaaa"
          />
          <TextInput
            name="address"
            label="Domicilio:"
            register={register}
            validationType={shortText}
            errors={errors}
          />
          <TextInput
            name="city"
            label="Ciudad:"
            register={register}
            validationType={shortText}
            errors={errors}
          />
          <TextInput
            name="state"
            label="Provincia:"
            register={register}
            validationType={shortText}
            errors={errors}
          />
          <TextInput
            name="country"
            label="País:"
            register={register}
            validationType={shortText}
            errors={errors}
          />
        </div>

        <div className="signup-button__spacing">
          <button className="btn btn-solid btn-long" disabled={!isValid}>
            GUARDAR
          </button>
        </div>
      </div>
    </>
  )
}

export default Registration2

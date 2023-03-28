import TextInput from './TextInput'
import { signupSchema } from 'Helpers/validationSchemas'

const AddPaymentMethodForm = ({ watch, errors, isValid, register }) => {
  const schema = signupSchema(watch)
  const { longText, cardNumber } = schema

  return (
    <>
      <div className="login-form__inputs">
        <TextInput
          type="text"
          name="cardOwnerName"
          label="Nombre del titular"
          register={register}
          validationType={longText}
          errors={errors}
        />
        <TextInput
          type="text"
          name="cardNumber"
          label="Número de la tarjeta"
          register={register}
          validationType={cardNumber}
          errors={errors}
        />
      </div>

      <div className="login-form__buttons">
        <button className="btn btn-solid btn-long" disabled={!isValid}>
          Guardar método de pago
        </button>
      </div>
    </>
  )
}

export default AddPaymentMethodForm

import AddPaymentMethodForm from 'Components/Elements/AddPaymentMathodForm'
import TextHeader from 'Components/Elements/TextHeader'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import useAddPaymentMethod from 'Hooks/useAddPaymentMethod'

const addPaymentDefaultValues = {
  cardOwnerName: 'Robert Robertz',
  cardNumber: '1234 5678 9012 3456',
}

const AddPaymentMethod = () => {
  const { onSubmit } = useAddPaymentMethod()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    defaultValues: addPaymentDefaultValues,
  })
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')

  }

  const onSubmitHandler = (data) => {
    onSubmit(data)
  }
  return (
    <>
      <TextHeader text={'Agregar tarjeta nueva'} navigate={goBack} />
      <form className="login__form" onSubmit={handleSubmit(onSubmitHandler)}>
        <AddPaymentMethodForm register={register} watch={watch} errors={errors} isValid={isValid} />
      </form>
    </>
  )
}

export default AddPaymentMethod

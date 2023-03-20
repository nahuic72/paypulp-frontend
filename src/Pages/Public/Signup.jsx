import { useForm } from 'react-hook-form'
import Submitting from 'Components/Submitting'
import 'Styles/Auth.css'
import useSignup from 'Hooks/useSignup'
import Registration1 from 'Components/Signup/Registration1'
import Registration2 from 'Components/Signup/Registration2'

const signupDefaultValues = {
  firstName: 'Robert',
  lastName: 'Robertz',
  email: 'robert@robertz.com',
  password: '1234Q@we',
  confirmPassword: '1234Q@we',
  phone: '1234567890',
  address: 'Robert Street 4',
  city: 'Madrid',
  state: 'Madrid',
  country: 'Spain',
  birthDate: '1995-10-25',
  gender: 'non-binary',
}

export default function Signup() {
  const {
    page,
    setPage,
    accountType,
    setAccountType,
    submitting,
    setSubmitting,
    errorMessage,
    onSubmit,
  } = useSignup()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    defaultValues: signupDefaultValues,
  })

  // go back to page 1 but keep info
  const goBack = () => {
    setPage(1)
    setSubmitting(null)
  }

  return (
    /*    <div className="login_form">
      {submitting ? (
        <Submitting
          submitState={submitting}
          goBack={goBack}
          errorMessage={errorMessage}
          location="signup"
        />
      ) : ( */
    <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
      {page === 1 && (
        <Registration1
          setPage={setPage}
          register={register}
          watch={watch}
          errors={errors}
          isValid={isValid}
        />
      )}
      {page === 2 && (
        <Registration2
          setPage={setPage}
          register={register}
          watch={watch}
          errors={errors}
          isValid={isValid}
        />
      )}
      {page === 2 && (
        <button className="btn btn-solid btn-long" disabled={!isValid}>
          GUARDAR
        </button>
      )}
    </form>
  )
}

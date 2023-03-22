import TextInput from 'Components/Elements/TextInput'
import { useForm } from 'react-hook-form'
import 'Styles/AddSellerInfo.css'

const AddSellerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm()

  const radioOption = watch('hasLocation')

  const onSubmit = (e) => {
    console.log(e)
  }

  const spaceTop = radioOption !== 'withLocation' ? { paddingTop: 114, height: 503 } : null

  return (
    <form className="add-seller__wrapper" style={spaceTop} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextInput name="sellerName" label="Nombre del negocio" register={register} />
        <div className="add-seller__text-aux text-aux">
          El nombre que elijas aparecerá en los comprobantes de pago y en las actividades de tus
          compradores.
        </div>
      </div>

      {/* <div className="add-seller__spacer-1"></div> */}

      <div className="add-seller__category">
        <TextInput name="category" label="Categoría" register={register} />
        <div className="add-seller__text-aux text-aux">Elige el rubro principal de tu negocio.</div>
      </div>

      <div className="add-seller__radio-wrapper">
        <h3 className="add-seller__radio-title">¿Qué tipo de negocio tienes?</h3>

        <div className="add-seller__radio-option">
          <input type="radio" id="noLocation" value="noLocation" {...register('hasLocation')} />
          <label htmlFor="noLocation">Sin negocio a la calle</label>
        </div>

        <div className="add-seller__radio-option">
          <input type="radio" id="withLocation" value="withLocation" {...register('hasLocation')} />
          <label htmlFor="withLocation">Con negocio a la calle</label>
        </div>
      </div>

      {radioOption === 'withLocation' && (
        <>
          <div className="add-seller__store-address">
            <TextInput name="storeAddress" label="Dirección" register={register} />
            <div className="add-seller__text-aux text-aux">
              El nombre que elijas aparecerá en los comprobantes de pago y en las actividades de tus
              compradores.
            </div>
          </div>

          <div className="add-seller__spacer-1"></div>

          <div>
            <TextInput name="storeAddressAddInfo" label="Datos extra" register={register} />
            <div className="add-seller__text-aux text-aux">
              Elige el rubro principal de tu negocio.
            </div>
          </div>
        </>
      )}

      <button className="add-seller__submit-btn btn btn-long btn-solid">Continuar</button>
    </form>
  )
}

export default AddSellerForm

import TextInput from 'Components/Elements/TextInput'
import { signupSchema } from 'Helpers/validationSchemas'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router'
import UserInfo from 'Services/User'
import 'Styles/AddSellerInfo.css'

const defaultForm = {
  hasLocation: 'noLocation',
  sellerName: '',
  category: '',
  storeAddress: 'Calle Ronaldo 1',
  storeAddressAddInfo: 'Puerta derecha',
}

const AddSellerForm = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: defaultForm })

  const { shortText } = signupSchema(watch)

  const radioOption = watch('hasLocation')
  const spaceTop = radioOption !== 'withLocation' ? { paddingTop: 114, height: 503 } : null
  const optionalInputs =
    radioOption !== 'withLocation'
      ? { position: 'absolute', opacity: 0, bottom: 0, zIndex: -10 }
      : { position: 'static', opacity: 1 }

  const onSubmit = async (formData) => {
    const body = formData
    delete body.hasLocation

    try {
      const res = await UserInfo.postSellerInfo(body)
      if (res.status === 200) toast.success('Tu perfil ha sido actualizado!')

      const url = `/qrgen/seller/${params.checkoutType}`
      navigate(url)
    } catch (err) {
      const errMsg = err.response ? err.response.data.error : err.code
      toast.error(errMsg)
    }
  }

  return (
    <form className="add-seller__wrapper" style={spaceTop} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextInput
          name="sellerName"
          label="Nombre del negocio"
          type="text"
          validationType={shortText}
          errors={errors}
          register={register}
        />
        <div className="add-seller__text-aux text-aux">
          El nombre que elijas aparecerá en los comprobantes de pago y en las actividades de tus
          compradores.
        </div>
      </div>

      <div className="add-seller__category">
        <TextInput
          name="category"
          label="Categoría"
          type="text"
          validationType={shortText}
          errors={errors}
          register={register}
        />
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

      <div className="add-seller__optional-fields" style={optionalInputs}>
        <div className="add-seller__store-address">
          <TextInput
            name="storeAddress"
            label="Dirección"
            type="text"
            validationType={shortText}
            errors={errors}
            register={register}
          />
          <div className="add-seller__text-aux text-aux">Ingresa la dirección de tu negocio.</div>
        </div>

        <div className="add-seller__spacer-1"></div>

        <div>
          <TextInput
            name="storeAddressAddInfo"
            label="Datos extra"
            type="text"
            validationType={shortText}
            errors={errors}
            register={register}
          />
          <div className="add-seller__text-aux text-aux">Nro. de local, piso, etc.</div>
        </div>
      </div>

      <button className="add-seller__submit-btn btn btn-long btn-solid">Continuar</button>
    </form>
  )
}

export default AddSellerForm

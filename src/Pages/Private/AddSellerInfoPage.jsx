import AddSellerForm from 'Components/AddSellerInfo/AddSellerForm'
import TextHeader from 'Components/Elements/TextHeader'
import { useNavigate } from 'react-router'

const AddSellerInfoPage = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }

  return (
    <div>
      <TextHeader text="Datos de vendedor" navigate={goBack} />
      <AddSellerForm />
    </div>
  )
}

export default AddSellerInfoPage

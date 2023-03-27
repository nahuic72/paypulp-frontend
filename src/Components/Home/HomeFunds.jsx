import FakeTextInput from 'Components/Elements/FakeTextInput'

const HomeFunds = ({ funds }) => {
  // const funds = '0 €'
  return (
    <div className="home-funds">
      <FakeTextInput label="Saldo actual" value={funds} isDisabled={false} />
      <button className="btn btn-long btn-solid">Retirar</button>
    </div>
  )
}

export default HomeFunds

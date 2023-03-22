import FakeTextInput from 'Components/Elements/FakeTextInput'
import FundsInput from 'Components/Elements/FundsInput'
import TextInput from 'Components/Elements/TextInput'
import React from 'react'

const HomeFunds = () => {
  const funds = '0 €'
  return (
    <div className="home-funds">
      <FakeTextInput label="Saldo actual" value={funds} isDisabled={false} />
      <button className="btn btn-long btn-solid">Retirar</button>
    </div>
  )
}

export default HomeFunds

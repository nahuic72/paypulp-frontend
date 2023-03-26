import CardsArray from 'Components/Elements/CardsArray'
import NoCardInfo from 'Components/Elements/NoCardInfo'
import HomeActions from 'Components/Home/HomeActions'
import HomeFunds from 'Components/Home/HomeFunds'
import HomeHeader from 'Components/Home/HomeHeader'
import useGetUserInfo from 'Hooks/useGetUserInfo'
import { useState } from 'react'

const Home = () => {
  const { userCtxt, payMets } = useGetUserInfo()
  const [position, setPosition] = useState(['cards__first', 'cards__second', 'cards__third'])

  const rotate = () => {
    const arr = position
    const first = arr.shift()
    arr.push(first)
    setPosition([...arr])
  }

  return (
    <>
      <HomeHeader name={userCtxt.firstName} />
      <section className="home-container">
        <HomeFunds funds={userCtxt.funds} />
        {!payMets && <NoCardInfo />}
        {payMets && (
          <CardsArray
            funds={userCtxt.funds}
            payMets={payMets}
            rotate={rotate}
            position={position}
          />
        )}
        <HomeActions accountType={userCtxt.accountType} />
      </section>
    </>
  )
}

export default Home

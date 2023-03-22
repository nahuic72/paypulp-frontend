import CardsArray from 'Components/Elements/CardsArray'
import HomeActions from 'Components/Home/HomeActions'
import HomeFunds from 'Components/Home/HomeFunds'
import HomeHeader from 'Components/Home/HomeHeader'
import { useEffect, useState } from 'react'
import UserInfo from 'Services/User'

const Home = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await UserInfo.getUserInfo()
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

    // get paymethds
  }, [])

  return (
    <>
      <HomeHeader name={user.firstName} />
      <HomeFunds funds={user.funds} />
      <CardsArray funds={user.funds} />
      <HomeActions />
    </>
  )
}

export default Home

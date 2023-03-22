import CardsArray from 'Components/Elements/CardsArray'
import HomeActions from 'Components/Home/HomeActions'
import HomeFunds from 'Components/Home/HomeFunds'
import HomeHeader from 'Components/Home/HomeHeader'
import useGetUserInfo from 'Hooks/useGetUserInfo'

const Home = () => {
  const { user } = useGetUserInfo()

  return (
    <>
      <HomeHeader name={user.firstName} />
      <HomeFunds funds={user.funds} />
      <CardsArray funds={user.funds} />
      <HomeActions accountType={user.accountType} />
    </>
  )
}

export default Home

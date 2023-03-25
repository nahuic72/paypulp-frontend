import CardsArray from 'Components/Elements/CardsArray'
import HomeActions from 'Components/Home/HomeActions'
import HomeFunds from 'Components/Home/HomeFunds'
import HomeHeader from 'Components/Home/HomeHeader'
import useGetUserInfo from 'Hooks/useGetUserInfo'

const Home = () => {
  const { userCtxt } = useGetUserInfo()

  return (
    <>
      <HomeHeader name={userCtxt.firstName} />
      <HomeFunds funds={userCtxt.funds} />
      <CardsArray funds={userCtxt.funds} />
      <HomeActions accountType={userCtxt.accountType} />
    </>
  )
}

export default Home

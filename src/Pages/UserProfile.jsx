import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { userContext } from '../Context/UserContext'
import Dates from '../Helpers/Dates'
import UserInfo from '../Services/User'

const UserProfile = () => {
  const { userInfo } = useContext(userContext)
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    values: {
      address: userInfo.address,
      city: userInfo.city,
      country: userInfo.country,
      birthDate: Dates.formatDateYMD(userInfo.birthDate),
    },
  })

  const onSubmit = (userData) => {
    try {
      UserInfo.updateUserInfo(userData)
    } catch (error) {
      console.error('🥳SURPRISE!', error)
    }
  }

  return (
    <section className="profile">
      {/* <h2 className="profile-title">Profile</h2>
      <DashboardCard className="profile-basic-info-card">
        <div className="profile-basic-info">
          <Avatar sx={{ width: 100, height: 100 }} />
          <h2>{`${userInfo.firstName} ${userInfo.lastName}`}</h2>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phone}</p>
          <p>Member since: {Dates.stringToLocaleString(userInfo.creationTime)}</p>
        </div>
      </DashboardCard>
      <DashboardCard className="profile-costumer-info-card">
        <CustomerInfo
          register={register}
          errors={errors}
          userInfo={userInfo}
          setFocus={setFocus}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </DashboardCard> */}
    </section>
  )
}

export default UserProfile

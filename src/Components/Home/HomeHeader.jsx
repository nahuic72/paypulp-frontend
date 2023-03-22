import 'Styles/Home.css'
import avatar from 'Assets/Images/Avatar.png'

const Header = ({ name }) => {
  return (
    <div className="home-header">
      <img className="home-header__avatar" src={avatar} alt="Avatar" />
      <div className="home-header__greeting">Hola {name}</div>
      <div className="home-header__help">?</div>
    </div>
  )
}

export default Header
import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { Avatar, ClickAwayListener } from '@mui/material'
import { userContext } from 'Context/UserContext'
import useWindowSize from 'Hooks/useWindowSize.js'
import NavAuthBtns from './NavAuthBtns'
import NavLinks from './NavLinks'
import NavMenu from './NavMenu'
import 'Styles/NavBar.css'

export default function NavBar() {
  // toggle mobile menu
  const [showMenu, setShowMenu] = useState(false)
  // get viewport width
  const { width } = useWindowSize()
  const { userInfo, setUserInfo, setTransactions } = useContext(userContext)
  const navigate = useNavigate()

  const signOut = () => {
    localStorage.clear()
    setUserInfo({})
    setTransactions([])
    navigate('')
  }

  /**
   * - ClickAwayListener close mobile menu on click outside navbar
   * - nav onClick close mobile menu on click inside
   * - MenuOpenIcon only displays on mobile
   */
  return (
    <ClickAwayListener onClickAway={() => setShowMenu(false)}>
      <div className="nav-wrapper">
        <nav onClick={() => showMenu === true && setShowMenu(!showMenu)}>
          <NavLink to="">
            <img className="logo" src="" alt="PayPulp logo" />
          </NavLink>

          {width > 1000 ? (
            <>
              <NavLinks width={width} accountType={userInfo.accountType} />
              {!localStorage.getItem('token') ? (
                <NavAuthBtns signOut={signOut} desktop={true} />
              ) : (
                <div className="nav-avatar-wrapper">
                  {showMenu ? (
                    <Avatar className="nav-avatar" onClick={() => setShowMenu(true)} />
                  ) : (
                    <button
                      className={`round-btns white-outline-btn ${showMenu && 'visible'}`}
                      onClick={signOut}>
                      Sign Out
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              {!localStorage.getItem('token') ? (
                <MenuOpenIcon
                  className="menu-icon"
                  fontSize="large"
                  onClick={() => setShowMenu(true)}
                />
              ) : (
                <>
                  <div className="nav-avatar-wrapper">
                    <Avatar className="nav-avatar" onClick={() => setShowMenu(true)} />
                  </div>
                </>
              )}
              <NavMenu
                showMenu={showMenu}
                width={width}
                signOut={signOut}
                accountType={userInfo.accountType}
              />
            </>
          )}
        </nav>
      </div>
    </ClickAwayListener>
  )
}

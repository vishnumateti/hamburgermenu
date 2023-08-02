// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-section-container">
      <Link to="/">
        <img
          className="logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            type="button"
            className="close-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="link-container">
              <li className="list-container">
                <Link
                  className="home-icon-container"
                  to="/"
                  onClick={() => close()}
                >
                  <AiFillHome size="36" color="#616e7c" />
                  <h1 className="nav-link-content">Home</h1>
                </Link>
              </li>

              <li className="list-container">
                <Link
                  className="home-icon-container"
                  to="/about"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill size="36" color="#616e7c" />
                  <h1 className="nav-link-content">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default withRouter(Header)

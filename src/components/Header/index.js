import {Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'
import './index.css'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false) // Use 'useState' instead of '{ mobileMenu, setMobileMenu }'

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <header className="header">
      <Link to="/" className="nav-link">
        <div className="d-flex flex-row justify-content-center">
          <div>
            <img
              src="https://res.cloudinary.com/dyixrm8rs/image/upload/v1696877135/passport_photo_vinod_muzjxp.jpg"
              alt="profilePic"
              className="pic rounded-circle ml-4"
            />
          </div>
          <h1 className="text-center">Mr.VK</h1>
        </div>
      </Link>

      <div className="nav">
        <nav className="nav-items">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutMe" className="nav-link">
            About Me
          </Link>
          <Link to="/project" className="nav-link">
            Project
          </Link>
          
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
      <div
        className="mobile-menu"
        onClick={toggleMobileMenu}
        role="button"
        tabIndex="0"
      >
        <AiOutlineMenu className="menu-white" />
      </div>
      {mobileMenu && (
        <div className="mobile-menu-content">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link to="/aboutMe" className="nav-link">
            About Me
          </Link>
          <Link className="nav-link" to="/project">
            Project
          </Link>
          
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header

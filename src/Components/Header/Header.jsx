import { Link, NavLink } from "react-router-dom"
import "./Header.scss"
const Header = () => {
  return (
    <>
    <header className="container">
        <nav className="navbar">
          <Link to="/">
            <h1>Codv Blog</h1>
          </Link>
            <div className="links">
                <NavLink to="/" className={(active)=> active.isActive && "active" } >Home</NavLink>
                <NavLink to="/about" className={(active)=> active.isActive && "active" }>About</NavLink>
                <Link to="/create" className="btn">New Post</Link>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header
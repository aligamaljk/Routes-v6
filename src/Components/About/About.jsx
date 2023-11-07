import { Link, Outlet } from 'react-router-dom'
import './About.scss'

const About = () => {
  return (
    <>
        <div className="about">
            <h1>About</h1>
            <Link to="/about/hello">Hello</Link>
            <Outlet/>
        </div>
    </>
  )
}

export default About
// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="bg-container">
    <Header />
    <div className="home-container">
      <img
        className="image-sm"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      />
      <img
        className="image-lg"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />
    </div>
  </div>
)

export default About

// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="bg-container">
    <Header />
    <div className="home-container">
      <img
        className="image-sm"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      />
      <img
        className="image-lg"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      />
    </div>
  </div>
)

export default Home

// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="home-container">
      <img
        className="not-found-image"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
      />
      <h1 className="lost-text">Lost Your Way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound

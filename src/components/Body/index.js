import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-card">
          {showLeftNavbar ? (
            <div className="navbar1">
              <h2>Left Navbar Menu</h2>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-card">
              <h2>Content</h2>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="navbar2">
              <h2>Right Navbar</h2>
              <div className="r1">
                <p>Ad 1</p>
              </div>
              <div className="r1">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

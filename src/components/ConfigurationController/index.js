import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickShowContent = () => {
        onToggleShowContent()
      }

      const onClickShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onClickShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="ConfigurationController-card">
          <div className="layout-input">
            <h1 className="layout-text">Layout</h1>
            <div className="input-card">
              <input
                type="checkbox"
                id="Content"
                value={showContent}
                name="Content"
                checked={showContent}
                onChange={onClickShowContent}
              />
              <label htmlFor="Content">Content</label>
            </div>

            <div className="input-card">
              <input
                type="checkbox"
                id="Left Navbar"
                name="Left Navbar"
                checked={showLeftNavbar}
                value={showLeftNavbar}
                onChange={onClickShowLeftNavbar}
              />
              <label htmlFor="Left Navbar">Left Navbar</label>
            </div>

            <div className="input-card">
              <input
                type="checkbox"
                id="Right Navbar"
                name="Right Navbar"
                checked={showRightNavbar}
                value={showRightNavbar}
                onChange={onClickShowRightNavbar}
              />
              <label htmlFor="Right Navbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

import {Component} from 'react'
import './index.css'
class LightDarkMode extends Component {
  state = {isDark: true}
  changeMode = () => {
    this.setState(prev => {
      return {isDark:!prev.isDark}
    })
  }
  render() {
    const {isDark} = this.state
    const changeMode = isDark ? "dark" : "light"
    const btnText = isDark ? "Light Mode" : "Dark Mode"
  
    return (
      <div className="bg-container">
        <div className={`container ${changeMode}`}>
          <h1 className="heading">Click To change Mode</h1>
            <button className="button" onClick={this.changeMode}>
              {btnText}
            </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode

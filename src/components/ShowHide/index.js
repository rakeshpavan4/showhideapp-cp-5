import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstchange: false, lastchange: false}

  firstButton = () => {
    this.setState(prevstate => ({firstchange: !prevstate.firstchange}))
  }

  lastButton = () => {
    this.setState(prevstate => ({lastchange: !prevstate.lastchange}))
  }

  render() {
    const {firstchange, lastchange} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttonContainer">
          <div>
            <button type="button" className="button" onClick={this.firstButton}>
              Show/Hide Firstname
            </button>
            {firstchange && <p className="firstname">Joe</p>}
          </div>
          <div>
            <button type="button" className="button" onClick={this.lastButton}>
              Show/Hide Lastname
            </button>
            {lastchange && <p className="lastname">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

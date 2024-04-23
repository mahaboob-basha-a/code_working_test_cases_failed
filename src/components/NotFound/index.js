import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import Loader from 'react-loader-spinner'
import './index.css'

class NotFound extends Component {
  state = {loading: true}

  componentDidMount() {
    this.onRetry()
  }

  onRetry = async () => {
    try {
      const id = this.props.location.pathname
      this.setState({loading: false})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const {loading} = this.state
    return (
      <>
        <Header />
        <div>
          {loading ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
                alt="not found"
              />
              <h1>Page Not Found</h1>
              <p>We are sorry, the page you requested could not be found</p>
            </div>
          )}
        </div>
      </>
    )
  }
}
export default withRouter(NotFound)

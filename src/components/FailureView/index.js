import {Component} from 'react'
import Header from '../Header'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'

class FailureView extends Component {
  state = {loading: true}

  componentDidMount() {
    this.onRetrying()
  }
  onRetrying = async () => {
    this.setState({loading: true})
    try {
      const id = this.props
      const res = await fetch(`https://apis.ccbp.in/te${id.location.pathname}`)
      if(res.ok === true){
      this.setState({loading: false})
      }else{
        this.setState({loading:false})
      }
        
    } catch (e) {
      this.setState({loading: false})
      console.log(e)
    }
  }

  onClickin = () => {
    this.onRetrying()
  }
  render() {
    const {loading} = this.state
    return (
      <>
        <Header />
        {loading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We cannot seem to find the page you are looking for</p>
            <button onClick={this.onClickin} className="retrybtn">
              Retry
            </button>
          </div>
        )}
      </>
    )
  }
}
export default withRouter(FailureView)

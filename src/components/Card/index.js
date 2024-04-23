import Header from '../Header'
import {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import './index.css'

class Card extends Component {
  state = {loading: true, cardList: [], status: false}
  componentDidMount() {
    this.onCardData()
  }
  onCardData = async () => {
    try {
      const id = this.props.match.params.id
      const res = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
      if (res.ok === true) {
        const data = await res.json()
        this.setState({
          loading: false,
          cardList: data.course_details,
          status: false,
        })
      } else {
        this.setState({loading: false, status: true})
      }
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const {loading, cardList, status} = this.state
    const {id, name, image_url, description} = cardList
    // console.log(cardList)
    if (status) {
      return <FailureView />
    }
    return (
      <>
        <Header />
        {loading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="one-card">
            <img src={image_url} alt={name} />
            <div>
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        )}
      </>
    )
  }
}
export default withRouter(Card)

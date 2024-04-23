import {Component} from 'react'
import CardList from '../CardList'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FailureView from '../FailureView'
import './index.css'

class Home extends Component {
  state = {loading: true, courseList: [], cardList: [], statuss: false}

  componentDidMount() {
    this.onfetchingAllData()
  }

  onfetchingAllData = async () => {
    try {
      const res = await fetch('https://apis.ccbp.in/te/courses')
      // console.log(res)
      if (res.ok === true) {
        const data = await res.json()
        this.setState({courseList: data.courses, loading: false, status: false})
      } else {
        this.setState({loading: false, statuss: true})
      }
    } catch (e) {
      this.setState({loading: false, statuss: true})
    }
  }
  render() {
    const {loading, courseList, statuss} = this.state
    if (statuss) {
      return <FailureView />
    }
    return (
      <div className="home-page">
        <Header />
        <div>
          <h1>Courses</h1>
          {loading ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="ul-course">
              {courseList.map(item => {
                const {id, name, logo_url} = item
                return (
                  <li key={id}>
                    <CardList id={id} name={name} logo_url={logo_url} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home

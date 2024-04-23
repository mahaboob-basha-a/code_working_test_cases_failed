import Home from './components/Home'
import Card from './components/Card'
import NotFound from './components/NotFound'
import FailureView from './components/FailureView'
import {Switch, Route} from 'react-router-dom'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={Card} />
    <Route exact path="/failureview" component={FailureView} />
    <Route component={NotFound} />
  </Switch>
)

export default App

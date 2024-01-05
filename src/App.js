import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Project from './components/Project'

import AboutMe from './components/AboutMe'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={AboutMe} />
    <Route exact path="/" component={Project} />
<Route exact path="/" component={ContactForm} /> 
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)
export default App

import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage'
import NonProfit from './ProjectPages/NonProfit';
import DateNight from './ProjectPages/DateNight'
export default class Routes extends Component {
  render() {
    return (
      <div>
         <Router>
            <Switch>
                <Route exact path = '/' component = {LandingPage} />
                <Route path = '/portfolio/1' component = {NonProfit} />
                <Route path = '/portfolio/2' component = {DateNight} />
            </Switch>
        </Router>
      </div>
    )
  }
}

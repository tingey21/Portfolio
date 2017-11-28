import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage'
import NonProfit from './ProjectPages/NonProfit';
export default class Routes extends Component {
  render() {
    return (
      <div>
         <Router>
            <Switch>
                <Route exact path = '/' component = {LandingPage} />
                <Route path = '/portfolio/1' component = {NonProfit} />
            </Switch>
        </Router>
      </div>
    )
  }
}

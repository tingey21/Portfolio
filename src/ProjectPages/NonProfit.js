import React, { Component } from 'react'
import './NonProfit.css'
import placeholder from '../pictures/thenonprofit.jpg'
import {Link} from 'react-router-dom'
export default class NonProfit extends Component {
  render() {
    return (
      <div className = 'project'>
            <div className = "big-name" id = 'project-title'> 
          <Link to= {'/'}> <div className = "left-big-arrow"></div></Link>
          The Non Profit
            <Link to= {'/portfolio/2'}> <div className = "big-arrow"></div></Link>
           </div>
          <div className = "portfolio-image"><img src={placeholder} alt=""/></div>
          
            <div className = "about-project"> <p>The Non Profit was a personal project I completed at DevMountain which one most technical. The client side features the ability to donate, read a blog post and view the get involved cards. they also have the ability to sign up for the newsletter. It has route verification so if the user is not signed in they cant access the admin routes. 
              </p> <p>The admin can update blog posts and get involved cards as well as send out a mass newsletter to everyone who has signed up. when the user types in an active email they recieve a thank you email instantly for signing up. On the admin side it uses Auth0 to handle the authentication of admin routes.  </p>
            
            </div>
            
              <div className = "feature-wrapper">
                <div className = "feature-title">Features</div>
                <div className = "tech-list">
                  <li>React</li>
                  <li>Node Mailer</li>
                  <li>ath0</li>
                  <li>responsive design</li>
                  <li>stripe</li>
                </div>
              </div>
              <div className = "url-wrapper">
                <div className = "url">URL</div>
                <a href="http://TheNonProfit40.org" target = "_blank" rel="noopener noreferrer"><div className = "ink"> TheNonProfit40.org </div></a>
            </div>
      </div>
    )
  }
}

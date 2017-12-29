import React, { Component } from 'react'
import './NonProfit.css'
import placeholder from '../pictures/screencapture-dategen-io-1514318667706.png'
import {Link} from 'react-router-dom'
export default class DateNight extends Component {
  render() {
    return (
      <div className = 'project'>
      
          <div className = "big-name" id = 'project-title'>
          <Link to= {'/portfolio/1'}><div className = "left-big-arrow"></div></Link>
            Date Idea Generator
            </div>
          <div className = "portfolio-image"><img src={placeholder} alt=""/></div>
            <div className = "about-project"> <p>dategen.io was a group project that pulls from the yelp api and randomizes dates for you and your Significant other to go on. I was on a team of four and worked primarily on the functionality of the app.   </p>
            <p>The site grabs based off the location you type in and front loads it while the animation runs. then you have over 100+ locations based off how big the city is for each category. You can also filter out certain parameters such as: Don't make me run, stone cold sober, and I'm on a budget.</p>
            <p>
              Once you finalize a date it creates a unique ID using base 64 which gives or 48 billion unique ID possibilities. With that ID you can send it to your significant other and they can edit the date and save it. after that all you do is have to refresh the page and the new dates will be there.
            </p>
            <p>
              Also once you hit save date you have the ability to hit google maps and it exports to your phone so you have instant directions to your date.
            </p>
            
            </div>
              <div className = "feature-wrapper">
                <div className = "feature-title">Features</div>
                <div className = "tech-list">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Redux Promise MiddleWare</li>
                  <li>Sass</li>
                  <li>Responsive Design</li>
                  <li>Node.js</li>
                  <li>Jest</li>
                  <li>express</li>
                </div>
              </div>
              <div className = "url-wrapper">
                <div className = "url">URL</div>
                <a href="http://dategen.io" target = "_blank" rel="noopener noreferrer"><div className = "ink"> dategen.io </div></a>
              </div>
              
              
          </div>
    )
  }
}

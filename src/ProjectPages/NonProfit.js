import React, { Component } from 'react'
import './NonProfit.css'
export default class NonProfit extends Component {
  render() {
    return (
      <div className = 'project'>
      
          <div className = "big-name" id = 'project-title'>The Non Profit</div>
          <div className = "portfolio-image">Img</div>
          <div className = "project-body">
            <div className = "about-project">Text</div>
            <div className = "right-column">
              <div className = "feature-wrapper">
                <div className = "feature-title">Features</div>
                <div className = "tech-list">
                  <div>Text</div>
                  <div>Text</div>
                  <div>Text</div>
                  <div>Text</div>
                  <div>Text</div>
                </div>
              </div>
              <div>
                <div>Url</div>
                <div>TheNonProfit40.org</div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

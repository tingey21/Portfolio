import React, { Component } from 'react'
import './NonProfit.css'
import placeholder from '../techIcons/img-5-1200x600.png'
export default class DateNight extends Component {
  render() {
    return (
      <div className = 'project'>
      
          <div className = "big-name" id = 'project-title'>Date Idea Generator</div>
          <div className = "portfolio-image"><img src={placeholder} alt=""/></div>
          <div className = "project-body">
            <div className = "about-project"> <p>According to Kipling in his autobiography Something of Myself, posthumously published in 1937, the poem was inspired by Dr. Leander Starr Jameson, who in 1895 led a raid by British forces against the Boers in South Africa, subsequently called the Jameson Raid. This defeat increased the tensions that ultimately led to the Second Boer War. The British press, however, portrayed Jameson as a hero in the middle of the disaster, and the actual defeat as a British victory. Jameson’s life — and the connection to the poem — is covered in the book The If Man.</p>
            <p>If you can keep your head when all about you are losing theirs and blaming it on you; If you can trust yourself when all men doubt you, but make allowance for their doubting too; if you can wait and not be tired by waiting,or being lied about, don’t deal in lies, or being hated, don’t give way to hating, and yet don’t look too good, nor talk too wise; if you can dream — and not make dreams your master; if you can think — and not make thoughts your aim; if you can meet with Triumph and Disaster and treat those two impostors just the same.</p>
            <p>If you can bear to hear the truth you’ve spoken twisted by knaves to make a trap for fools, or watch the things you gave your life to broken, and stoop and build ’em up with wornout tools; if you can make one heap of all your winnings and risk it on one turn of pitch-and-toss, and lose, and start again at your beginnings and never breathe a word about your loss.</p>
            </div>
            <div className = "right-column">
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
                <a href="http://TheNonProfit40.org" target = "_blank" rel="noopener noreferrer"><div className = "ink"> TheNonProfit40.org </div></a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

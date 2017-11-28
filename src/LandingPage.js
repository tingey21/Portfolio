import React, { Component } from 'react';
import './reset.css';
import './App.css'
import responsive from './svg/responsive.svg';
import speed from './svg/speed.svg';
import rocket from './svg/rocket.svg';
import lightbulb from './svg/lightbulb.svg';
import angular from './techIcons/angular.png';
import auth0 from './techIcons/auth0.png';
import css from './techIcons/css.png';
import express from './techIcons/express.png';
import grunt from './techIcons/grunt.png';
import git from './techIcons/git_logo.png';
import html from './techIcons/HTML5_Logo_512.png';
import js from './techIcons/learn-javascript.png';
import photoshop from './techIcons/photoshop.png';
import node from './techIcons/node.png';
import postgres from './techIcons/postgres.png';
import react from './techIcons/react.png';
import redux from './techIcons/redux.png';
import sass from './techIcons/sass.png';
import sql from './techIcons/sql.png';
import github from './svg/git.svg';
import linkedIn from './svg/LinkedIn.svg'
import Document from './svg/Document.svg'
import {Link} from 'react-router-dom'
class LandingPage extends Component {

  constructor(props){
    super(props)
    this.state =({
      headerShown: false,
      onFeatured: false,
      onProjects: false,
      onAbout: false,
      onTech: false,
      onContact: false,

      animate: false,

      showBack: true,
      showFront: true,
      seenFeatured: false,
      seenProjects: false,
      seenAbout: false,
      seenTech: false,
      seenContact: false
    })
  }

  componentDidMount() {
    this.handleScroll = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  findPos(obj) {
    var curtop = -155;
    if (obj.offsetParent) {
      // eslint-disable-next-line
          do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}


  handleScroll() {
    
    var last_known_scroll_position = Math.round(window.scrollY);
    console.log(last_known_scroll_position)

    if(last_known_scroll_position < 100  ){
    this.setState({
      headerShown: false,
      onFeatured: false,
      onProjects: false,
      onAbout: false,
      onTech: false,
      onContact: false,
      showBack: true,
      showFront: true,

      animate: true,

      seenFeatured: false,
      seenProjects: false,
      seenAbout: false,
      seenTech: false,
      seenContact: false
    })} 

    if(last_known_scroll_position >= this.findPos(document.getElementById("skills")) && last_known_scroll_position < this.findPos(document.getElementById("projects")) ){
      this.setState({
        headerShown: true,
        onFeatured: true,
        onProjects: false,
        onAbout: false,
        onTech: false,
        onContact: false,
        animate: true,
        seenFeatured: true,
      })}

      if(last_known_scroll_position >= this.findPos(document.getElementById("projects")) && last_known_scroll_position < this.findPos(document.getElementById("about-me")) ){
        this.setState({
          headerShown: true,
          onFeatured: false,
          onProjects: true,
          onAbout: false,
          onTech: false,
          onContact: false,

          seenFeatured: true,
          seenProjects: true,
          
        })
      
      
      } 

        if(last_known_scroll_position >= this.findPos(document.getElementById("about-me")) && last_known_scroll_position < this.findPos(document.getElementById("tech-known"))  ){
          this.setState({
            headerShown: true,
            onFeatured: false,
            onProjects: false,
            onAbout: true,
            onTech: false,
            onContact: false,

            
            seenAbout: true,
            
          })} 

          if(last_known_scroll_position >= this.findPos(document.getElementById("tech-known")) && last_known_scroll_position < this.findPos(document.getElementById("social"))  ){
            this.setState({
              headerShown: true,
              onFeatured: false,
              onProjects: false,
              onAbout: false,
              onTech: true,
              onContact: false,

              seenTech: true,
            })} 
          if(last_known_scroll_position >= this.findPos(document.getElementById("social"))){
            this.setState({
              headerShown: true,
              onFeatured: false,
              onProjects: false,
              onAbout: false,
              onTech: false,
              onContact: true,

              seenContact: true
            })} 
  


    
    
      
      console.log(this.state.headerShown)
    
  }

  
  
showAll(){
  this.setState({
    showBack: true,
    showFront: true
  })
}

showBackend(){
  this.setState({
    showBack: true,
    showFront: false,
  })
}

showFrontend(){
  this.setState({
    showBack: false,
    showFront: true
  })
}

  render() {
    return (
      <div className="App" >
      {/* ------------Header------------ */}
        <div className = {this.state.headerShown ? 'floating-header' : 'header'} id = "red-color">
          <div className = 'icon-left'>Icon</div>
          <div className = {this.state.onFeatured ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("skills")))}>Featured</div>
          <div className = {this.state.onProjects ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("projects")))}>Projects</div>
          <div className = {this.state.onAbout ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("about-me")))}>about me</div>
          <div className = {this.state.onTech ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("tech-known")))}>tech</div>
          <div className = {this.state.onContact ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("social")))}>Contact Me</div>

          <div className = "hidden" id = "red-color">
            <div>Ham</div>
              <div className = {this.state.onFeatured ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("skills")))}>Focus</div>
              <div className = {this.state.onProjects ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("projects")))}>Projects</div>
              <div className = {this.state.onAbout ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("about-me")))}>about me</div>
              <div className = {this.state.onTech ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("tech-known")))}>tech</div>
              <div className = {this.state.onContact ? 'purple': 'cursor'} onClick={() => window.scroll(0,this.findPos(document.getElementById("social")))}>Contact Me</div>
            
          </div>
        </div>

        
      {/* ------------Intro------------ */}
        <div className = {this.state.headerShown ? 'floating-intro' : 'intro'} id = "red-color">
          <div>
            <h1 className = 'big-name'>Alexander</h1>
            <p className = "intro-desc">Web Developement, from another angle </p>
           <div className = "border"></div>
          </div>
        </div>

        

        <div  id = 'size' >
          <div className = "decor">

          </div>
        </div>
     
       {/* ------------Featured Skills------------ */}
       <div className = "skills" id = "skills">
        <div className = "skills-header" >
          <h1 className = "big-name" id = 'black'>Focus</h1>
          <div className = "border" id = "red"></div>
          
        </div>
        <div className = "skills-wrapper">
          <div className = 'skill-box' id = {this.state.animate ? 'animation1' : ''}>
            <div className = 'red-circle'><img src={speed} alt=""/> </div>
            <h1 className = "skill-title">Fast</h1>
            <p className = "skill-desc">Fast load times and lag free interaction, my highest priority.</p>
          </div>
          
          
          <div className = 'skill-box' id = {this.state.animate ? 'animation2' : ''}>
            <div className = 'red-circle'> <img src={responsive} alt=""/></div>
            <div className = "skill-title">Responsive</div>
            <div className = "skill-desc">My layouts will work on any device, big or small.</div>
          </div>

          <div className = 'skill-box' id = {this.state.animate ? 'animation3' : ''} >
            <div className = 'red-circle'><img src={lightbulb} alt=""/> </div>
            <div className = "skill-title">Intuitive</div>
            <div className = "skill-desc">Strong preference for easy to use, intuitive UX/UI.</div>
          </div>

          <div className = 'skill-box'  id = {this.state.animate ? 'animation4' : ''}>
            <div className = 'red-circle'><img src={rocket} alt=""/></div>
            <div className = "skill-title">Dynamic</div>
            <div className = "skill-desc">Websites don't have to be static, I love making pages come to life.
</div>
          </div>
        </div>
      </div>

      <div  id = 'size' >
        <div className = "flip-decor">

        </div>
        </div>

        {/* ------------Projects------------ */}
        <div className = "projects" id  = "projects">
          <div className =  "big-name" >My Latest Work</div>
          <div className = "border" id = "margin"></div>
          <div className = {this.state.seenProjects ? 'project-wrapper': 'invisible'}>
            <div className = "project-img" id = "non">
             <Link to = {'/portfolio/1'} style ={{textDecoration: 'none', color: "#ffff"}}> 
                <div className = "test">
                  <div className = "test-title">
                    The Non Profit
                    <div className = "test-desc">
                      Click to see more
                    </div>
                  </div>
                </div>
            </Link>
            </div>
            <div className = "project-img" id = "fix">
               <div className = "test">
                  <div className = "test-title">
                  Fix My Dumb PC
                    <div className = "test-desc">
                      description of site
                    </div>
                  </div>
              </div>
            </div>
            <div className = "project-img" id = "TBD">
             <div className = "test">
                  <div className = "test-title">
                    To Be Determined
                    <div className = "test-desc">
                      description of site
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div  id = "size">
          <div className = "decor">

          </div>
        </div>

 {/* ------------About Me------------ */}
 <div className = "about-me" id = 'about-me'>
          <div className = "big-name" >About Me</div>
          <div className = "border" id = "red"></div>
          <div className = {this.state.seenAbout ? 'about-wrapper': 'invisible'}>
            <div className = "about-image"><div className= "test" id = "about-image">
            Likes: <div>
              Adventuring
            </div>
            </div></div>
            <div className = "about-name">Alexander Tingey</div>
            <div className = "about-job">Web Developer</div>
            <div className = "about-desc">Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke.</div>
          </div>
        </div>

        <div  id = 'size' >
          <div className = "flip-decor">

          </div>
        </div>
        
        {/* ------------Tech------------ */}
        <div className = "tech-known" id = "tech-known">
          <div className = "big-name"id = 'tech-font'>Technologies</div>
          <div className = "border" id = "margin"></div>
            <div className = "sort">
              <div className = "sort-button" onClick = { () => this.showAll()}> <div className = {this.state.showBack && this.state.showFront ? 'arrow' : ''}></div> Full Stack</div>
              <div className = "sort-button" onClick = { () => this.showFrontend()}>
              <div className = {!this.state.showBack && this.state.showFront ? 'arrow' : ''}></div> Front End</div>
              <div className = "sort-button" onClick = { () => this.showBackend()}>
              <div className = {this.state.showBack && !this.state.showFront ? 'arrow' : ''}></div> Back End</div>
            </div>
            
          <div className = { this.state.seenTech ?"icon-grid" : 'invisible'}>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
              
              <img src={js} alt=""/>
              <div className = "text">Javascript</div>
              
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <div><img src={express} alt=""/></div>
              <div className = "text">Express.js</div>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
            <img src={angular} alt=""/>
            <div className = "text">Angular</div>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={postgres} alt=""/>
              <div className = "text">Postgres</div>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
            <img src={react} alt=""/>
            <div className = "text">React</div>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
            <img src={node} alt=""/>
            <div className = "text">Node.js</div>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
              <img src={css} alt=""/>
              <div className = "text">CSS</div>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={sql} alt=""/>
              <div className = "text">SQL</div>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
            <img src={html} alt=""/>
            <div className = "text">HTML</div>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={auth0} alt=""/>
              <div className = "text">Auth0</div>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
              <img src={sass} alt=""/>
              <div className = "text">Sass</div>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={git} alt=""/>
              <div className = "text">Git</div>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
              <img src={photoshop} alt=""/>
              <div className = "text">Photoshop</div>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={grunt} alt=""/>
              <div className = "text">Grunt</div>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
            <img src={redux} alt=""/>
            <div className = "text">Redux</div>
            </div>
          </div>
        </div>

        <div  id = "size">
          <div className = "decor"></div>
        </div>     
      {/* ------------social------------ */}

      <div className = "social" id = 'social'>
      <div className = 'big-name' id = 'social'>Contact Me</div>
      
      <div className = "border" id = "red"></div>

         <div className = "contact-wrapper">
            <div className = "contact-box">
              <div className = 'red-circle'><img src={linkedIn} alt=""/> </div>
              <div></div>
            </div>
            <div className = 'red-circle'><img src={github} alt=""/> </div>
            <div className = 'red-circle'><img src={Document} alt=""/> </div>
          </div>
          
          
      </div>


      <div  id = 'size' >
          <div className = "flip-decor">

          </div>
         
        </div>  
       
      </div>
    );
  }
}

export default LandingPage;

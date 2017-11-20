import React, { Component } from 'react';
import './reset.css';
import './App.css';
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
import sql from './techIcons/sql.png'


class App extends Component {

  constructor(props){
    super(props)
    this.state =({
      headerShown: false,
      onFeatured: false,
      onProjects: false,
      onAbout: false,
      onTech: false,
      onContact: false,

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


      //ask natalia if it should reset
      seenFeatured: false,
      seenProjects: false,
      seenAbout: false,
      seenTech: false,
      seenContact: false
    })} 

    if(last_known_scroll_position >= 100 && last_known_scroll_position < 700 ){
      this.setState({
        headerShown: true,
        onFeatured: true,
        onProjects: false,
        onAbout: false,
        onTech: false,
        onContact: false,

        seenFeatured: true,
      })}

      if(last_known_scroll_position >= 700 && last_known_scroll_position < 1400 ){
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

        if(last_known_scroll_position >= 1400 && last_known_scroll_position < 1900 ){
          this.setState({
            headerShown: true,
            onFeatured: false,
            onProjects: false,
            onAbout: true,
            onTech: false,
            onContact: false,

            
            seenAbout: true,
            
          })} 

          if(last_known_scroll_position >= 1900 && last_known_scroll_position < 2300 ){
            this.setState({
              headerShown: true,
              onFeatured: false,
              onProjects: false,
              onAbout: false,
              onTech: true,
              onContact: false,

              seenTech: true,
            })} 
          if(last_known_scroll_position >= 2300){
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

  findPos(obj) {
    var curtop = -125;
    if (obj.offsetParent) {
      // eslint-disable-next-line
          do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
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
          <div>Icon</div>
          <div>Featured</div>
          <div>Projects</div>
          <div>about me</div>
          <div>tech</div>
          <div>Contact Me</div>

        </div>
        </div>

        
      {/* ------------Intro------------ */}
        <div className = {this.state.headerShown ? 'floating-intro' : 'intro'} id = "red-color">
          <div>
            <div className = 'big-name'>Alexander</div>
            <div className = "intro-desc">Web Developement, from another angle </div>
           <div className = "border"></div>
          </div>
        </div>

        

        <div  id = 'size' >
          <div className = "decor">

          </div>
        </div>
     
       {/* ------------Featured Skills------------ */}
       <div className = "skills">
        <div className = "skills-header" id = "skills">
          <div className = "skills-title">Featured</div>
          <div className = "border" id = "red"></div>
          
        </div>
        <div className = "skills-wrapper">
          <div className = 'skill-box'>
            <div className = 'red-circle'><img src={speed} alt=""/> </div>
            <div className = "skill-title">Fast</div>
            <div className = "skill-desc">Fast load times and lag free interaction, my highest priority.</div>
          </div>
          
          
          <div className = 'skill-box'>
            <div className = 'red-circle'> <img src={responsive} alt=""/></div>
            <div className = "skill-title">Responsive</div>
            <div className = "skill-desc">My layouts will work on any device, big or small.</div>
          </div>

          <div className = 'skill-box'>
            <div className = 'red-circle'><img src={lightbulb} alt=""/> </div>
            <div className = "skill-title">Intuitive</div>
            <div className = "skill-desc">Strong preference for easy to use, intuitive UX/UI.</div>
          </div>

          <div className = 'skill-box'>
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
        <div className = "projects" id = "red-color">
          <div className = "project-title" id  = "projects">My Latest Work</div>
          <div className = "border" id = "margin"></div>
          <div className = {this.state.seenProjects ? 'project-wrapper': 'invisible'}>
            <div className = "project-img" id = "non">
              <div className = "test">
                  <div className = "test-title">
                    The Non Profit
                    <div className = "test-desc">
                      description of site
                    </div>
                  </div>
              </div>
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
          <div className = "big-name">About Me</div>
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
        <div className = "tech-known" id = "red-color">
          <div id = 'tech-known'>Tech Known</div>
          <div className = "border" id = "margin"></div>
            <div className = "sort">
              <div onClick = { () => this.showAll()}>fullStack</div>
              <div onClick = { () => this.showFrontend()}>Front End</div>
              <div onClick = { () => this.showBackend()}>Back End</div>
            </div>
            
          <div className = { this.state.seenTech ?"icon-grid" : 'invisible'}>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
              <img src={js} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={express} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
            <img src={angular} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={postgres} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
            <img src={react} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
            <img src={node} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
              <img src={css} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={sql} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
            <img src={html} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={auth0} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
              <img src={sass} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={git} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
              <img src={photoshop} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showBack ? 'front' : "fade"}>
              <img src={grunt} alt=""/>
            </div>
            <div className = "icon" id=  { this.state.showFront ? 'front' : "fade"}>
            <img src={redux} alt=""/>
            </div>
          </div>
        </div>

        <div  id = "size">
          <div className = "decor"></div>
        </div>     
      {/* ------------social------------ */}

      <div className = "social" id = 'social'>
          <div className = 'social-wrapper'>
            <div>linked In</div>
            <div>Github</div>
            <div>Resume</div>
          </div>
      </div>


           
       
      </div>
    );
  }
}

export default App;

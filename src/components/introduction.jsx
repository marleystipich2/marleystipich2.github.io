import React, { Component } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, animateScroll as scroll, scroller, Button } from 'react-scroll'

export default class Introduction extends Component {
  scrollToAbout() {
    scroller.scrollTo('colorlib-about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToProjects() {
    scroller.scrollTo('colorlib-work', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi,<br />I'm Marley!</h1>
                          <p><a className="btn btn-primary btn-learn" href="/documents/Marley_Sorine_RESUME_p.docx" download >View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Check out some of my<br /> recent projects!</h1>
                          <p><a className="btn btn-primary btn-learn" onClick={() => this.scrollToProjects()} >Recent Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1> Learn a little more <br/> about me.. </h1>
                          <p><a className="btn btn-primary btn-learn" onClick={() => this.scrollToAbout()} >Learn More <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

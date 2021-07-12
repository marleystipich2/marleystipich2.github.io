import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a software developer with almost 2 years of industry experience. In May 2020, I graduated with a Bachelor's degree in Computer Science and Engineering from The Ohio State University. I currently work remotely as an application developer at Global Impact. Global Impact works on charitable ventures to inspire greater giving. 
                    It's been such a great experience working at a company with such an important mission. 
                    I have always been a very creative person so I love having the opportunity to solve unique problems on a daily basis whether it's implementing a new feature, manipulating data in the database, designing the appearance of a web application, or diagnosing and fixing bugs quickly and effectively. 
                    My favorite thing about software development is learning new things on a daily basis and being able to express my creativity!</p>
                    <p>A few things about me, that you wouldn't learn from my resume, is that I have a Goldendoodle named Oscar, I was recently engaged in May 2021, and I became an aunt in December 2020! I also moved away from my home in Ohio to Baton Rouge, LA, in May of 2020.
                    There has been a lot of exciting life events recently and I am so grateful for all of the amazing opportunities and people in my life. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I have experience building and maintaining websites using Ruby on Rails, JavaScript, React, AngularJS, Bootstrap, HTML, CSS, Git, GitHub, and Cloud platforms</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Test Automation</h3>
                    <p>I have experience creating automated tests using Selenium, Capybara, Cucumber, Ruby on Rails and RSpec</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Database Management</h3>
                    <p>I have significant knowledge creating SQL queriers and scripts to manipulate and extract data from a database</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}

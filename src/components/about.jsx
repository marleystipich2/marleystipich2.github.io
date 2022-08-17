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
                    <p>I'm currently a Software Engineer at Red Hat on the Insights Compliance team. My daily tasks include implementing new features, fixing bugs in a timely manner,
                    analyzing metrics, writing tests, coordinating with other teams on projects,
                    and working with Product/Project Managers, UX Designers, Technical Writers and more to ensure the success of the service.
                    I have a passion for expressing my creativity through writing high-quality code and contributing to open-source software communities.
                    </p>
                    <p> I am a strong advocate for Diversity and Inclusion in the workplace. Diversity and Inclusion in the workplace not only benefits
                    the employees by creating a sense of belonging but it benefits the business as well. Diverse workplaces have been shown to increase productivity,
                    improve innovation and creativity, and give the company a better understanding of the customers needs.
                    </p>
                    <p> Although supporting people of diverse groups that are already in the tech field is extremely important, 
                    I believe that it's equally as important to encourage more people from these groups to join the tech field. 
                    Being a woman in the tech industry, I know that it can be intimidating not seeing much diversity at all. You feel like you stand out and don't belong. 
                    This feeling can lead to self-doubt and possibly stray people of diverse groups away from this field. Wherever my career takes me, I'd like to do all 
                    that I can to help support these diverse communities and bring more Diversity and Inclusion to the tech industry. </p>
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

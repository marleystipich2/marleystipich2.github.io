import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Rails Gem - Bundler Audit Notifier</h3>
											<span>Created a Ruby on Rails gem that scans source code for gem vulnerabilities and sends them in an email where the gem user can choose to ignore vulnerabilities by clicking a link on the email</span>
											<span>Relevant skills utilized: Ruby on Rails, HTML, RSpec tests, REST API, Token auth, Publishing Ruby on Rails Gem </span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Admin Alert Feature</h3>
											<span>Created admin alert feature where admin can create an alert message that will be displayed to every user on the site</span>
											<span>Relevant skills utilized: Ruby on Rails, JavaScript, AngularJS, Bootstrap, HTML, CSS </span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Set Up Google ReCAPTCHA</h3>
											<span>Added Google ReCAPTCHA to each sign up and login pages</span>
											<span>Relevant skills utilized: Ruby on Rails, JavaScript, AngularJS, Bootstrap, HTML, Research </span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Automated Cucumber Tests</h3>
											<span>Created automated tests that cover every feature on the website</span>
											<span>Relevant skills utilized: Ruby on Rails, Capybara, Cucumber, Bootstrap, HTML, CSS </span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Email Log Feature</h3>
											<span>Implemented an email logging feature that tracks every email sent out by the system and sends an email that notfifies of any email failures or bounces</span>
											<span>Relevant skills utilized: Ruby on Rails, Postmark Webhooks, REST API, Bootstrap, HTML, CSS </span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Security Improvements</h3>
											<span>Implemented various security improvements including logging out idle users after certain period of time, lock out users that exceed the sign in attempt limit, and disable user accounts that have been inactive for over 90 days</span>
											<span>Relevant skills utilized: Ruby on Rails, Devise authentication gem </span>
										</div>
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

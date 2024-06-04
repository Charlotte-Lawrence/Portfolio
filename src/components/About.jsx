import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <section className="aboutSection" id="about">
        <h1 className="centered">About Me</h1>
        <div className="centered">
          <p>
            I am a passionate and dedicated Computer Science student in my final year at Lancaster University.
            <br /><br /><br />
            I have a strong interest in software development, artificial intelligence, problem-solving and data analytics. I have developed proficiency in various programming languages, specialising in <b>Java</b> and <b>Python</b>, and I enjoy working on projects that challenge me to think critically and creatively.
            <br /><br /><br />
            During my academic journey, I have had the opportunity to work on various projects including java applications, web applications and other specific-use scripts. Most notably, I have gained valuable knowledge in <b>Distributed Systems</b> by implementing my own client-server auction system in java <b>RMI</b> utilising encryption and authorisation techniques. I have also worked on a large project during my 2nd year group project module where we created a microsoft paint style application in Java.
            <br /><br /><br />
            When I'm not programming, I enjoy attending societies at university such as the Lancaster University Motorsport Society where we often gather for Formula 1 viewings or karting events.
          </p>
        </div>
      </section>
    )
  }
}

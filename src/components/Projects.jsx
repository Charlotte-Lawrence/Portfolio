import React, { Component } from 'react';

const projects = [
  {
    title: 'Final Year Project: Exploring Bias and Fairness in Generative Language Models (ChatGPT)',
    projectLanguage: 'Python',
    image: 'office-paper.jpg',
    description: 'My final year project was in exploring bias within generative language models, with specific focus on ChatGPT.  Within this project, I used prompt engineering to uncover bias within ChatGPT\'s training data.  I used R for statistical analysis of the results and Python to automate detecting bias in GLM\'s and to measure it. Finally, I proposed techniques to mitigate bias in generative language models'
  },
  {
    title: 'Client-Server Auction System',
    projectLanguage: 'Java',
    image: '',
    description: 'A Java RMI auction system supporting encryption, authentication and dependability.  Encryption: RSA asymmetric encryption (pair of keys, public and private).  Authentication: 3 way authentication before any interaction with the auction server with SHA256. A valid token will be provided upon authentication for the client to use with a request.  Dependability: Passive replication with a frontend. The frontend maintains a consistent view accross replicas and allows for replicas to recover and update their state. The program also tolerates frontend failures and picks a new primary replica.'
  },
  {
    title: 'Image Feature Matching',
    projectLanguage: 'MATLAB',
    image: 'FeatureMatching.png',
    description: 'This project was a project in MATLAB to be able to match features in images to other images so objects can be identified.  It involves using the SIFT technique so that changing the scale, intensity or rotation of the image does not effect the feature matching.'
  },
  {
    title: 'Solar System',
    projectLanguage: 'Java',
    image: 'solar.jpg',
    description: 'In this project, I created a 2D animated model of the solar system using Java.  I heavily used object-oriented principles for extensible and efficient code with each item inheriting from a custom SolarObject type.  I also added extra features of my own such as being able to alter the speed of the model/pausing it altogether by using keyboard keybinds and added an asteroid belt which consisted of randomly generated and sized asteroids.  This was created in Java but at some point I hope to extend the project further and potentially use Unity to remake it in 3D with correct planet textures.'
  },
  {
    title: 'Graphics Editor',
    projectLanguage: 'Java',
    image: 'pixelEditor.jpg',
    description: 'This project was for my CS group project module, coded in java and heavily utilised version control (GitLab).  This was our take on a pixel based graphics editor similar to MS paint.  Features I worked on: Fill tool (flood fill algorithm using BFS), Layering functionality, Export to PNG (with/without transparent background), File save and loading (including own custom file extension using object serialization).'
  },
  {
    title: 'Networking Applications',
    projectLanguage: 'Python',
    image: 'networking.jpg',
    description: 'This project was a coursework element for my Computer Networks module, written in Python.  The aim of this project was to replicate certain commonly-used networking tools using pythons Socket library.  I was able to implement a ping function to calculate the delay when pinging a certain host. I also created traceroute and paris traceroute functionality to try to accurately get the path that a packet will go through across networks. I implemented paris traceroute specifically for accuracy when dealing with networks that have load balancers and it should remove most of the \'false links\' that can sometimes be created with traditional traceroute. There are also additional functions such as web servers and proxies.'
  }
];

export default class ProjectsList extends Component {  
  
    render() {
    const { selectedLanguage } = this.props;
    const filteredProjects = selectedLanguage === 'All'
      ? projects
      : projects.filter(project => project.projectLanguage === selectedLanguage);
    
      return (
        filteredProjects.map((data, index) =>{
           
            return <div className="project rounded">
                <h2>{data.title}</h2> 
                <p> Programming Language: {data.projectLanguage}</p> 
                
                {
                    data.image ? (
                        <img className="project-image" src={require(`../images/${data.image}`)} alt={`${data.title}`}/>
                    ) :
                    (
                        <div className="imgPlaceholder">No image available</div>
                    )
                }
                <div className ="desc">
                    {data.description.split('.  ').map((block, idx, arr) => (
                        <span key={idx}>{block}{idx < arr.length - 1 ? '.' : ''}</span>
                    ))}
                </div>
                
            </div>
        })
    )
  }
}

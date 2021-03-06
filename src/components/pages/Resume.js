import React from 'react';
import '../styles/Resume.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'light blue',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Resume() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Resume</h2>
      <a href="./Resume_EASantos_2021v5.pdf" target="_blank"rel="noopener noreferrer">Download</a>
    <h3>Technologies Used</h3>
      <ul>
            <li>React</li>
            <li>Javascript</li>         
            <li>Node.js</li>         
            <li>HTML</li>         
            <li>CSS</li>         
            <li>MongoDB</li>         
            <li>MySQL</li>
            <li>Apollo</li>         
            <li>Graphql</li>         
            <li>Express</li>         
            <li>Inquirer</li>          
          </ul>
    </section>
  );
}

export default Resume;
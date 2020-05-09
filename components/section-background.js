import { useState } from 'react';

export default function SectionBackground() {
  const [skills] = useState([
    "I'm a Front-End web developer.",
    'A little Reactjs - VueJs :)',
    'I can use backend Nodejs.',
    'Use the Nestjs framework, and Inversify library.',
  ]);
  return (
    <section id="background">
      <div id="particles-js"></div>
      <div className="logo-bg">
        <img src="/images/logo.png" />
      </div>
      <div className="say-hello">Hello! I'm Nguyen Dai</div>
      <div className="cover-typed">
        <div id="typed-strings">
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        <span id="typed"></span>
      </div>
    </section>
  );
}

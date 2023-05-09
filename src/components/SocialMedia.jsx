import React from 'react';
import { BsLinkedin, BsTwitch, BsGithub } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/MateuszWoj-bit?tab=repositories">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/mateusz-w%C3%B3jcikowski-5554aa264/">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/mateusz-w%C3%B3jcikowski-5554aa264/">
      <div>
        <BsTwitch />
      </div>
    </a>
  </div>
);

export default SocialMedia;

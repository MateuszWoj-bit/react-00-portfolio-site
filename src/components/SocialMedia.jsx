import React from 'react';
import { BsLinkedin, BsTwitch, BsGithub } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/MateuszWoj-bit?tab=repositories">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="http://matflix.com.pl">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="http://matflix.com.pl">
      <div>
        <BsTwitch />
      </div>
    </a>
  </div>
);

export default SocialMedia;

import React from 'react';
import './styles.scss';

import FbIcon from '../SocialIcon/FbIcon';
import GIcon from '../SocialIcon/GIcon';
import LikedinIcon from '../SocialIcon/LikedinIcon';


const Socials = () => (
  <div className="Socials">
    <FbIcon socialUrl="https://www.facebook.com/" IconWidth="3rem" IconHeight="3rem" />
    <GIcon GsocialUrl="https://www.google.com/" GIconWidth="3rem" GIconHeight="3rem" />
    <LikedinIcon LsocialUrl="https://www.linkedin.com/" LIconWidth="3rem" LIconHeight="3rem" />
  </div>
);

export default Socials;

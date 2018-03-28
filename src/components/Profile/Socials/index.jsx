import React from 'react';
import './styles.scss';

import FbIcon from '../SocialIcon/FbIcon';
import GIcon from '../SocialIcon/GIcon';
import LikedinIcon from '../SocialIcon/LikedinIcon';


const Socials = ({ facebook, googlePlus, linkedin }) => (
  <div className="Socials">
    <FbIcon socialUrl = { facebook } IconWidth="3rem" IconHeight="3rem" />
    <GIcon GsocialUrl = { googlePlus } GIconWidth="3rem" GIconHeight="3rem" />
    <LikedinIcon LsocialUrl = { linkedin } LIconWidth="3rem" LIconHeight="3rem" />
  </div>
);

export default Socials;

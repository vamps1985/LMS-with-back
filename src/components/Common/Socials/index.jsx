import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import FbIcon from './SocialIcon/FbIcon';
import GIcon from './SocialIcon/GIcon';
import LikedinIcon from './SocialIcon/LikedinIcon';


const Socials = ({ facebook, googlePlus, linkedin, blockCls, cls, IconSize }) => (
  <div className={blockCls}>
    <FbIcon socialUrl = { facebook } IconSize={IconSize} cls={cls} />
    <GIcon socialUrl = { googlePlus } IconSize={IconSize} cls={cls} />
    <LikedinIcon socialUrl = { linkedin } IconSize={IconSize} cls={cls} />
  </div>
);


Socials.defaultProps = {
  facebook: '#',
  googlePlus: '#',
  linkedin: '#',
  IconSize: '3rem',
  cls: 'SocialIcon',
  blockCls: "Socials"
};

Socials.propTypes = {
  facebook: PropTypes.string,
  googlePlus: PropTypes.string,
  linkedin: PropTypes.string,
  IconSize: PropTypes.string,
  blockCls: PropTypes.string,
  cls: PropTypes.string,
};

export default Socials;

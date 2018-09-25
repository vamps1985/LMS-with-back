import React from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';

const FbIcon = ({ socialUrl, IconSize, cls }) => (
  <a href={ socialUrl } className={cls} >
    <svg xmlns="http://www.w3.org/2000/svg" width={IconSize} height={IconSize} viewBox="0 0 612 612">
	<path id="fbcircle" d="M612 306C612 137.004 474.995 0 306 0 137.004 0 0 137.004 0 306c0 168.995 137.004 306 306 306 168.995 0 306-137.005 306-306zm-584.182 0C27.818 152.36 152.36 27.818 306 27.818S584.182 152.36 584.182 306 459.64 584.182 306 584.182 27.818 459.64 27.818 306z" data-original="#000000" data-old_color="#ffffff" />
	<path id="fb" d="M317.739 482.617V306h58.279l9.208-58.529h-67.487v-29.348c0-15.272 5.007-29.849 26.928-29.849h43.813v-58.418h-62.201c-52.298 0-66.569 34.438-66.569 82.175v35.413h-35.885V306h35.885v176.617h58.029z" data-original="#000000"  data-old_color="#ffffff" />
	</svg>
  </a>
);

FbIcon.defaultProps = {
  socialUrl: '#',
  IconSize: '3rem',
  cls: 'SocialIcon',
};

FbIcon.propTypes = {
  socialUrl: PropTypes.string,
  IconSize: PropTypes.string,
  cls: PropTypes.string,
};


export default FbIcon;

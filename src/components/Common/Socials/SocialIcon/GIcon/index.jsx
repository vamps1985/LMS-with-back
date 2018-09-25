import React from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';

const GIcon = ({ socialUrl, IconSize, cls }) => (
  <a href={ socialUrl } className={cls} >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235 235" width={IconSize} height={IconSize}>
      <path id="google-svg" d="M117.5 0C52.71 0 0 52.71 0 117.5S52.71 235 117.5 235 235 182.29 235 117.5 182.29 0 117.5 0zm0 220C60.981 220 15 174.019 15 117.5S60.981 15 117.5 15 220 60.981 220 117.5 174.019 220 117.5 220zM95.064 110h48.026v7.5c0 26.481-21.544 48.025-48.026 48.025-26.482 0-48.025-21.544-48.025-48.025s21.544-48.025 48.025-48.025c10.684 0 20.806 3.439 29.271 9.946l-9.142 11.893c-5.82-4.474-12.781-6.839-20.129-6.839-18.211 0-33.025 14.815-33.025 33.025s14.815 33.025 33.025 33.025c15.632 0 28.762-10.916 32.167-25.525H95.064v-15zm89.691 0h13.075v15h-13.075v13.076h-15V125h-13.069v-15h13.069V96.924h15V110z" data-original="#000000" data-old_color="#ffffff" />
    </svg>
  </a>
);

GIcon.defaultProps = {
  socialUrl: '#',
  IconSize: '3rem',
  cls: 'SocialIcon',
};

GIcon.propTypes = {
  socialUrl: PropTypes.string,
  IconSize: PropTypes.string,
  cls: PropTypes.string,
};

export default GIcon;

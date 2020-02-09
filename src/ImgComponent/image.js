import React from 'react';
import PropTypes from 'prop-types';


const Image = ({ src,
  srcSet,
  alt,
  fallbackSrc,
  isLazy,
  onClick,
  style }) => (
    <img
      src={isLazy ? fallbackSrc : src}
      alt={alt}
      className={isLazy ? 'lazy' : ''}
      srcSet={isLazy ? '' : srcSet}
      data-srcset={srcSet}
      data-src={src}
      style={style}
      onClick={onClick}
    />
  )

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

Image.defaultProps = {
  onClick: () => { },
  isLazy: false
}

export default Image;
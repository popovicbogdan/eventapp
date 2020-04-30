import React from 'react';
import PropTypes from 'prop-types';

function svgContainer(Icon) {
  function SVG({ width, height, viewBox, color, onClick }) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={color}
        onClick={onClick}
      >
        <Icon />
      </svg>
    );
  }

  SVG.defaultProps = {
    width: '24',
    height: '24',
    vewBox: '0 0 24 24',
    color: 'black'
  };
  SVG.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  };
  return SVG;
}

export default svgContainer;

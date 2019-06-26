import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class FontIcon extends React.Component {
  render() {
    //console.log('FontAwesomeIco',  this.props);
    const { icon, customClass, size, ...custom } = this.props;
  
    return (
      <FontAwesomeIcon 
        icon={icon} 
        style={{ height: size, width: size }} 
        className={customClass} 
        {...custom}/>
    );
  }
}

FontIcon.propTypes = {
  size: PropTypes.string,
};

// FontIcon.defaultProps = {
//   size: 25
// }

export default FontIcon;

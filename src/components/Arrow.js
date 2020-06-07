import React from 'react';

function Arrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }
  
export default Arrow;
import React from 'react';

const ConditionalComponent = ({isVisible, GivenComponent}) => {
    return isVisible ? <div><GivenComponent/></div> : <div/>
};

export default ConditionalComponent;

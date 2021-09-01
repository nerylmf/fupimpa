import React from "react";

function IconAccordion(props) {

    return (

    <svg 
    className={props.className}
    height={props.height}
    width={props.width}
    viewBox="0 0 62 60" 
    xmlns="http://www.w3.org/2000/svg"
    >
    <path 
    d="M12.8396 26.955L17.3148 22.5L30.7404 35.625L44.1659 22.5L48.6411 26.955L30.7404 44.375L12.8396 26.955Z" 
    fill={props.fill}
    fill-opacity="0.5"/>
    </svg>

    );
}

export default IconAccordion;
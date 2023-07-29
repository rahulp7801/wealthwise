import React from 'react';
import 'assets/scss/interactive-icon.scss';

const InteractiveSkill = () => {
  return (
    <div >
        <a href="#" className="skill-outer interactive">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 20 1 1">
            <g opacity=".87" fill="none" stroke="#fff">
            {/* <text
                className="text"
                transform="translate(27.19 146.24)"
                fill="#fff"
                stroke="none"
                fontSize="10"
                fontFamily="RobotoMono-Medium,Roboto Mono"
                fontWeight="10"
            >
                Interactive
            </text> */}
            <path className="ellipse4" />
            <path className="ellipse3" />
            <path className="ellipse2" />
            <path className="ellipse1" />
            <path className="ellipse0" />
            <path
                className="ellipse"
                d="M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0"
                strokeMiterlimit="10"
                fill="#fff"
                opacity="0.87"
            />
            <path
                className="hand"
                d="M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z"
                fill="#121212"
                stroke="#fff"
                strokeMiterlimit="10"
            />
            <path className="bar" d="M96.68 88.8v-6.4" />
            <path className="bar" d="M90.61 87.29v-8.36" />
            <path className="bar" d="M84.73 86.74V76.13" />
            <path className="bar" d="M76.79 87.94v-2.39" />
            </g>
        </svg>
        </a>
    </div>
  );
};

export default InteractiveSkill;

import React, { useState, useRef } from 'react';
import AnimatedCursor from "react-animated-cursor"

function AnotherCursorApp() {
  
	return (
		<div className="App">
    <AnimatedCursor
      innerSize={5}
      outerSize={15}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
	);
}

export default AnotherCursorApp;

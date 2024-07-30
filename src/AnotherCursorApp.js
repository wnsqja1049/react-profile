import React, { useState, useRef } from 'react';
import AnimatedCursor from "react-animated-cursor"

function AnotherCursorApp() {
  
	return (
		<div className="App">
			<AnimatedCursor
				innerSize={0}
				outerSize={15}
				color='100, 100, 100'
				outerAlpha={0.15}
				innerScale={0.7}
				outerScale={3}
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
			<input type='text'></input>
			<button>test button</button>
		</div>
	);
}

export default AnotherCursorApp;

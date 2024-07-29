import Pageable from 'pageable';
import React, { useState, useRef } from 'react';
import './style.css';

function CursorApp() {
	
	const [xy, setXY] = useState({x : 0, y : 0})

	const xyHandler = (e) => {
	  const mouseX = e.clientX;
	  const mouseY = e.clientY;
  
	  setXY({x : mouseX, y: mouseY});
	  
	}
  
	return (
	  <div className='container' onMouseMove={xyHandler} >
		<div className='pointer' style ={{
		transform : `translate(${xy.x}px, ${xy.y}px)`
	  }} />
	  </div>
	);
}

export default CursorApp;

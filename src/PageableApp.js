import Pageable from 'pageable';
import styled from "styled-components";

import Pips from './components/Pips';
import Cursor from './components/MyCursor';
import Header from './components/Header';

import anime from 'animejs';

import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const PageName = styled.div`
position:sticky;
top:0px;
left:0px;
border:solid blue 4px;
`;

function PageableApp() {

	const [ pageName, setPageName ] = useState('intro')
	
	const containerRef = useRef();
	const buttonRef = useRef();

	useEffect(() => {
		const pages = new Pageable(containerRef.current, {
			//childSelector: "[data-anchor]", // CSS3 selector string for the pages
			anchors: [], // define the page anchors
			pips: true, // display the pips
			animation: 700, // the duration in ms of the scroll animation
			delay: 0, // the delay in ms before the scroll animation starts
			throttle: 50, // the interval in ms that the resize callback is fired
			orientation: "vertical", // or horizontal
			swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
			freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
			navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
			navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
			infinite: false, // enable infinite scrolling (from 0.4.0)
			// slideshow: { // enable slideshow that cycles through your pages automatically (from 0.4.0)
			// 	interval: 0, // time in ms between page change,
			// 	delay: 0 // delay in ms after the interval has ended and before changing page
			// },
			events: {
				wheel: true, // enable / disable mousewheel scrolling
				mouse: true, // enable / disable mouse drag scrolling
				touch: true, // enable / disable touch / swipe scrolling
				keydown: true, // enable / disable keyboard navigation
			},
			easing: function(currentTime, startPos, endPos, interval) {
				// the easing function used for the scroll animation
				return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
			},
			onInit: (data) => {
				console.log(data);

				if(data.index === 0) {
					anime({
						targets: buttonRef.current,
						duration: 1200,
						opacity: [0, 1],
						delay: 700
					})
				}
			},
			onUpdate: (data) => {}, 
			onBeforeStart: (index) => {},
			onStart: (pageName) => {
				console.log(pageName);
				setPageName(pageName);

				if(pageName === 'page-1') {
					anime({
						targets: buttonRef.current,
						duration: 1200,
						opacity: [0, 1],
						delay: 700
					})
				}
			},
			onScroll: () => {},
			onFinish: (data) => {
				console.log(data);

				// if(data.index === 0) {
				// 	anime({
				// 		targets: buttonRef.current,
				// 		duration: 1200,
				// 		opacity: [0, 1],
				// 		delay: 700
				// 	})
				// }
			},
		});
	}, [])

	return (
		<>
			<Header/>
			<Cursor/>
			<Pips/>

			<div id="container" ref={containerRef}>
				<div data-anchor="page-1" style={{'background': '#9DC8C8'}}>1
					<button ref={buttonRef} 
					style={{opacity:0,
						marginTop:'100px'
					}}
					onClick={() => {
						anime({
							targets: buttonRef.current,
							duration: 1200,
							opacity: [0, 1],
							delay: 700
						})
					}}>anime button</button>
				</div>
				<div data-anchor="page-2" style={{'background': '#58C9B9'}}>2</div>
				<div data-anchor="page-3" style={{'background': '#D1B6E1'}}>3</div>
				<div data-anchor="page-4" style={{'background': '#519D9E'}}>4</div>
			</div>
		</>
	);
}

const Container = styled.div`
background: #58C9B9;
`;
export function SecondPage() {
	return (
		<Container data-anchor="page-2" style={{'background': '#58C9B9'}}>2</Container>
	)
}

export default PageableApp;

import Pageable from 'pageable';
import styled from "styled-components";

import Cursor from './components/MyCursor';

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
			onInit: () => {},
			onUpdate: (data) => {}, 
			onBeforeStart: (index) => {},
			onStart: (pageName) => {
				setPageName(pageName);
			},
			onScroll: supdate,
			onFinish: (data) => {},
		});
	}, [])

	const supdate = (data) => {
		//console.log(data);
	}

	return (
		<>
			<nav>
				<ul>
					<li><a href={"#page-1"}><span></span></a></li>
					<li><a href={"#page-2"}><span></span></a></li>
					<li><a href={"#page-3"}><span></span></a></li>
					<li><a href={"#page-4"}><span></span></a></li>
				</ul>
			</nav>
			<div id="container" ref={containerRef}>
				<div data-anchor="page-1" style={{'background': '#9DC8C8'}}>1</div>
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

// import React, { useRef } from 'react';
// import gsap from 'gsap-trial';
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
// import { useGSAP } from '@gsap/react';

// import MatterMain from './MatterMain';
// import AboutMe from './AboutMe';

// gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// function App() {
// 	const main = useRef();
// 	const smoother = useRef();

// 	const scrollTo = (target) => {
// 	  smoother.current.scrollTo(target, true, 'center center');
// 	};

// 	useGSAP(() => {
// 			smoother.current = ScrollSmoother.create({
// 				smooth: 2,
// 				effects: true,
// 			});
// 			ScrollTrigger.create({
// 				trigger: '.box-c',
// 				pin: false,
// 				start: 'center center',
// 				end: '+=300',
// 				markers: false,
// 			});
// 		},
// 		{ scope: main }
// 	);

// 	return (
// 		<>
// 			<div id="smooth-wrapper" ref={main}>
// 				<div id="smooth-content">
// 					<MatterMain />
// 					<header className="header">
// 						<h2 className="title">GSAP ScrollSmoother in React</h2>
// 						<button className="button" onClick={()=>{scrollTo('.career')}}>Go to Career</button>
// 						<button className="button" onClick={()=>{scrollTo('.project')}}>Go to Projects</button>
// 					</header>
// 					{/* <div className="box box-a gradient-blue" data-speed="0.5">a</div>
// 					<div className="box box-b gradient-orange" data-speed="0.8">b</div>
// 					<div className="box box-c gradient-purple" data-speed="1.5">c</div> */}

// 					<div className='career' data-speed="1.0" style={{
// 						border:'solid red', 
// 						top:'2000px',
// 						position:'absolute'}}>커리어</div>

// 					<div className='project' data-speed="1.0" style={{
// 						border:'solid red', 
// 						top:'3000px',
// 						position:'absolute'}}>프로젝트</div>

// 					<div data-speed="1.0">
// 						<AboutMe />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default App;

// import { useState, useEffect, useRef } from "react";
// import './Main.css';
// import Matter from "matter-js";

// function MatterMain() {
// 	const containerRef = useRef(null);
// 	const canvasRef = useRef(null);

// 	const Engine = Matter.Engine;
// 	const Render = Matter.Render;
// 	const Runner = Matter.Runner;
// 	const World = Matter.World;
// 	const Bodies = Matter.Bodies;
// 	const Body = Matter.Body;
// 	const Composite = Matter.Composite;
// 	const Composites = Matter.Composites;
// 	const Common = Matter.Common;
// 	const Mouse = Matter.Mouse;
// 	const MouseConstraint = Matter.MouseConstraint;
// 	const Events = Matter.Events;

// 	//Matter 오브젝트
// 	let engine;
// 	let render;

// 	var bodyOptions = {
// 		frictionAir: 0,
// 		friction: 0.0001,
// 		restitution: 0.9
// 	};

// 	var restitution = 0.9; //반발력
// 	var gravity = 0.6; //중력
// 	var timeScale = 0.2;


// 	var ceil;
// 	var floor;
// 	var leftWall;
// 	var rightWall;

// 	const ballList = [
// 		{ radius: 80, width: 284, src: "/matter/html.png", },
// 		{ radius: 80, width: 385, src: "/matter/javascript.png", },
// 		{ radius: 80, width: 284, src: "/matter/css.png", },

// 		{ radius: 80, width: 334, src: "/matter/react.png", },
// 		{ radius: 80, width: 288, src: "/matter/nextjs.png", },
// 		{ radius: 80, width: 368, src: "/matter/typescript.png", },

// 		{ radius: 80, width: 252, src: "/matter/redux.png", },
// 		{ radius: 80, width: 409, src: "/matter/github.png", },
// 		{ radius: 80, width: 254, src: "/matter/figma.png", },

// 		{ radius: 80, width: 618, src: "/matter/notion.png", },
// 		{ radius: 80, width: 656, src: "/matter/flutter.png", },
// 		// { radius: 80, width: 681, src: "/matter/dart.png", },
// 	];

// 	const createEngine = () => {
// 		var engine = Engine.create({
// 			enableSleeping: true,
// 		});
// 		engine.gravity.y = gravity;
// 		engine.timing.timeScale = timeScale;

// 		return engine;
// 	}
// 	const createRender = (engine) => {
// 		var render = Render.create({
// 			element: containerRef.current,
// 			canvas: canvasRef.current,
// 			engine: engine,
// 			options: {
// 				showSleeping: false,
// 				//showIds:true,
// 				showVelocity: true,
// 				background: '#333',
// 				width: window.innerWidth,
// 				height: window.innerHeight,
// 				wireframes: false,
// 			}
// 		});

// 		return render;
// 	}
// 	const createWall = (world) => {
// 		ceil = Bodies.rectangle(window.innerWidth / 2, -5000, window.innerWidth, 10000, { isStatic: true, render: { fillStyle: 'transparent' } });
// 		floor = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 5000, window.innerWidth, 10000, { isStatic: true, render: { fillStyle: 'transparent' } });
// 		leftWall = Bodies.rectangle(-5000, window.innerHeight / 2, 10000, window.innerHeight, { isStatic: true, render: { fillStyle: 'transparent' } });
// 		rightWall = Bodies.rectangle(window.innerWidth + 5000, window.innerHeight / 2, 10000, window.innerHeight, { isStatic: true, render: { fillStyle: 'transparent' } });

// 		World.add(world, [floor, ceil, leftWall, rightWall]);
// 	}

// 	useEffect(() => {

// 		engine = createEngine();
// 		render = createRender(engine);
// 		var runner = Runner.create();

// 		const world = engine.world;

// 		// Run the renderer
// 		Render.run(render);
// 		Runner.run(engine);
// 		Runner.run(runner, engine);

// 		createWall(world);


// 		var balls = [];

// 		for (let i = 0; i < ballList.length; i++) {
// 			let ball = Bodies.circle(150, 150, 80,
// 				{
// 					restitution: bodyOptions.restitution,
// 					render: {
// 						sprite: {
// 							texture: ballList[i].src,
// 							xScale: ballList[i].radius * 2 / ballList[i].width,
// 							yScale: ballList[i].radius * 2 / ballList[i].width,
// 						}
// 					}
// 				}
// 			);
// 			balls.push(ball);
// 		}
// 		for (let i = 0; i < 30; i++) {
// 			let ball = Bodies.circle(50, 150, 40,
// 				{
// 					restitution: restitution,
// 				}
// 			);
// 			balls.push(ball);
// 		}

// 		World.add(world, balls);

// 		var explosion = function (engine, delta) {
// 			var timeScale = (1000 / 60) / delta;
// 			var bodies = Composite.allBodies(engine.world);

// 			for (var i = 0; i < bodies.length; i++) {
// 				var body = bodies[i];

// 				if (!body.isStatic && body.position.y >= 500) {
// 					var forceMagnitude = (0.01 * body.mass);

// 					Body.applyForce(body, body.position, {
// 						x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
// 						y: -forceMagnitude + Common.random() * -forceMagnitude
// 					});
// 				}
// 			}
// 		};

// 		var timeScaleTarget = 1;
// 		var lastTime = Common.now();

// 		// Events.on(engine, 'afterUpdate', function (event) {
// 		// 	var timeScale = (event.delta || (1000 / 60)) / 1000;

// 		// 	// tween the timescale for bullet time slow-mo
// 		// 	engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 2 * timeScale;

// 		// 	// every 2 sec (real time)
// 		// 	if (Common.now() - lastTime >= 1000) {

// 		// 		// flip the timescale
// 		// 		if (timeScaleTarget < 1) {
// 		// 			timeScaleTarget = 1;
// 		// 		} else {
// 		// 			timeScaleTarget = 0;
// 		// 		}

// 		// 		// create some random forces
// 		// 		explosion(engine, event.delta);

// 		// 		// update last time
// 		// 		lastTime = Common.now();
// 		// 	}
// 		// });






// 		//마우스 컨트롤 추가
// 		var mouse = Mouse.create(render.canvas)
// 		var mouseConstraint = MouseConstraint.create(engine, {
// 			mouse: mouse,
// 			constraint: {
// 				stiffness: 0.2,
// 				render: {
// 					visible: false,
// 				}
// 			}
// 		});

// 		Matter.Events.on(mouseConstraint, "mousedown", () => {
// 			if (mouseConstraint.body) {
// 				console.log('on body');

// 				// if(mouseConstraint.body === githubBall) {
// 				// console.log('githubBall');
// 				// }
// 			} else {
// 				console.log('no body');
// 			}
// 		})

// 		//Composite.add(world, mouseConstraint);
// 		World.add(world, mouseConstraint);

// 		render.mouse = mouse;

// 		mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
// 		mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

// 		const handleResize = () => {

// 			Render.stop(render);
// 			World.remove(world, [floor, ceil, leftWall, rightWall]);

// 			ceil = Bodies.rectangle(window.innerWidth / 2, -5000, window.innerWidth, 10000, { isStatic: true, render: { fillStyle: 'transparent' } });
// 			floor = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 5000, window.innerWidth, 10000, { isStatic: true, render: { fillStyle: 'transparent' } });
// 			leftWall = Bodies.rectangle(-5000, window.innerHeight / 2, 10000, window.innerHeight, { isStatic: true, render: { fillStyle: 'transparent' } });
// 			rightWall = Bodies.rectangle(window.innerWidth + 5000, window.innerHeight / 2, 10000, window.innerHeight, { isStatic: true, render: { fillStyle: 'transparent' } });

// 			World.add(world, [floor, ceil, leftWall, rightWall]);
// 			render.canvas.width = window.innerWidth - 18;
// 			render.canvas.height = window.innerHeight;

// 			Render.run(render);
// 		};

// 		window.addEventListener('resize', handleResize);

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	return (
// 		<div className="Main">
// 			<div ref={containerRef} style={{
// 				width: '100%',
// 				height: '100%',
// 			}}>
// 				<canvas id="id_canvas" ref={canvasRef} />
// 			</div>
// 			<div className="MainTitle">Junbeom's Portfolio</div>
// 		</div>
// 	)
// }

// export default MatterMain;

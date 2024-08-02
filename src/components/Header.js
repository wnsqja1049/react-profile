import anime from 'animejs';

import '../css/Header.css';
import '../css/Common.css';
import '../css/SlideNav.css';

import { useSelector, useDispatch } from 'react-redux';


import {
    setSlideMenu,
    setIsSlidingMenu,
    openSlideMenu,
    closeSlideMenu
} from '../redux/slice/slideMenuSlice'

import { useEffect, useRef } from 'react';

export default function Header() {

    const slideBgRef = useRef();
    const slideRef = useRef();

    let isOpening = false;
    let isClosing = false;

    const slideMenu = useSelector(state => state.slideMenu);

    const dispatch = useDispatch();

    useEffect(() => {
        if (slideMenu.value) {
            anime({
                targets: slideBgRef.current,
                duration: 700,
                opacity: [0, 0.2],
                delay: 300,
            })
            anime({
                targets: slideRef.current,
                duration: 700,
                translateX: [400, 0],
                easing: "easeOutExpo",
                delay: 300,
                complete: (anim) => {
                    dispatch(setIsSlidingMenu(false));
                }
            })
        } else {

        }
    }, [slideMenu.value])



    const open = () => {

        if (isOpening || isClosing) {
            return;
        }

        anime.set(slideRef.current, { display: 'block' })
        anime.set(slideBgRef.current, { display: 'block' })

        anime({
            targets: slideBgRef.current,
            duration: 700,
            opacity: [0, 0.2],
            delay: 300
        });

        anime({
            targets: slideRef.current,
            duration: 700,
            translateX: [400, 0],
            easing: "easeOutExpo",
            delay: 300,
            begin: (anim) => {
                isOpening = true;
            },
            complete: (anim) => {
                isOpening = false;
            }
        }).finished.then(
            dispatch(setIsSlidingMenu(false))
        )
    }
    const close = () => {

        if (isOpening || isClosing) {
            return;
        }

        anime({
            id: 'closeSlideBgAnim',
            targets: slideBgRef.current,
            duration: 700,
            opacity: [0.2, 0],
            delay: 300,
        })
        anime({
            id: 'closeSlideAnim',
            targets: slideRef.current,
            duration: 700,
            translateX: [0, 400],
            easing: "easeOutExpo",
            delay: 300,
            begin: (anim) => {
                isClosing = true;
            },
            complete: (anim) => {
                isClosing = false;
                anime.set(slideRef.current, { display: 'none' })
                anime.set(slideBgRef.current, { display: 'none' })
            }
        }).finished.then(() => {
            dispatch(closeSlideMenu())
        })
    }

    return (
        <>
            <header className="Header">
                <h1>Junbeom</h1>
                <button className='menu-button' onClick={open}>메뉴</button>
            </header>

            {/* <SlideMenu /> */}
            <div ref={slideBgRef} className='slide-bg' onClick={close}></div>

            <div ref={slideRef} className='slide-nav'>
                <div className='container'>
                    <button className='close-button' onClick={close}>닫기</button>
                    <ul>
                        <li><a href="#page-1" onClick={close}>page-1</a></li>
                        <li><a href="#page-2" onClick={close}>page-2</a></li>
                        <li><a href="#page-3" onClick={close}>page-3</a></li>
                        <li><a href="#page-4" onClick={close}>page-4</a></li>
                    </ul>
                </div>
            </div>
        </>

    )
}
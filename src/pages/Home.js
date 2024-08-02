import anime from 'animejs';
import '../css/Home.css';

export default function Home() {
    return (
        <>
            <button onClick={() => {
                var textWrapper = document.querySelector('.ml13');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                anime({
                    targets: '.ml13 .letter',
                    translateY: [20, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1000,
                    delay: (el, i) => 300 + 30 * i
                });
            }}>애니메이션</button>
            <h1 className="ml13">애니메이션</h1>
        </>
    )
}
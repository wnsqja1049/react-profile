import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
    return (
        <AnimatedCursor
            innerSize={0}
            outerSize={15}
            color='100, 100, 100'
            outerAlpha={0.15}
            innerScale={0.7}
            outerScale={3}
            showSystemCursor={true}
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
            innerStyle={{
                backgroundColor: 'var(--cursor-color)'
            }}
            outerStyle={{
                mixBlendMode: 'exclusion'
            }}
        />
    )
}
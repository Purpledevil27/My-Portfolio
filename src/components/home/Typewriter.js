import Typewriter from 'typewriter-effect'

const TypeWriter = () => {
    return (
        <Typewriter
            options={{
                strings: ['Developer.',
                    'Programmer.'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default TypeWriter
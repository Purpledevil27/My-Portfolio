import Typewriter from 'typewriter-effect'

const TypeWriter = () => {
    return (
        <Typewriter
            options={{
                strings: ['Welcome to my Portfolio.',
                    'Thank you for stopping by!',
                    'Take a look around AND',
                    'Feel free to Contact me!'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default TypeWriter
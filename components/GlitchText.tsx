type Props = {
    text: string;

    
};

export default function GlitchText({
    text,

}: Props) {
    return (
        <h1 className='glitch'>
            <span aria-hidden='true'>{text}</span>
            {text}
            <span aria-hidden='true'>{text}</span>
        </h1>
    );
}


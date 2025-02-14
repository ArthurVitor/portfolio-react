import './ButtonCss.css';

interface ButtonComponentProps { 
    title: string;
    link: string;
}

export function ButtonComponent({ title, link }: ButtonComponentProps) {
    function handleRedirect(link: string) {
        window.open(link, '_blank')
    }
    return (
        <>
            <div className="button-container">
                <button className="button" onClick={() => handleRedirect(link)}>{ title }</button>
            </div>
        </>
    )
}
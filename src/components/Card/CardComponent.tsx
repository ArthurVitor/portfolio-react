import { ButtonComponent } from '../Button/ButtonComponent';
import './CardCss.css';

export interface CardComponentProps {
    title: string;
    description: string;
    stack: string;
    image?: string;
    buttons: { title: string; link: string }[];
}

export function CardComponent({ title, description, stack, image = 'Rectangle 2.png', buttons }: CardComponentProps) {
    console.log(title, description, image);
    return (
        <>
            <div className="card-container">
                <img src={image} alt="ibagem" className='card-image'/>
                <h1 className="card-title">
                    { title }
                </h1>
                <p className='card-tech'>{ stack }</p>
                <div className="card-body">
                    { description }
                </div>
                <div className="card-footer">
                    {
                        buttons.map((btn, index) => (
                            <ButtonComponent  key={index} link={btn.link} title={btn.title}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
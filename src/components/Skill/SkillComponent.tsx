import './SkillCss.css';

type Stars = 1 | 2 | 3 | 4 | 5;

interface SkillComponentProps {
    skill: string;
    stars: Stars;
}

export function SkillComponent({ skill, stars }: SkillComponentProps) {
    return (
        <>
            <div className="skill-container">
                <span>{skill}</span>
                <div className="stars">
                    {
                        Array.from({ length: 5 - stars }).map((_, index) => (
                            <div key={index} className="star"></div>
                        ))
                    }
                    {
                        Array.from({ length: stars }).map((_, index) => (
                            <div key={index} className="star fill"></div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
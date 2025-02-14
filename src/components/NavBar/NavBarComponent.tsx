import './NavBar.css';
import { useNavigate } from 'react-router';

function NavBarComponent() {
    const navigate = useNavigate();
    return (
        <>
            <div className="nav-bar-container">
                <div className="nav-items">
                    <div className="logo">
                        <a href="https://db.tec.br/" target='_blank'><img src="/Logo DB dark blue 1.svg" alt="DBServer Logo" /></a>
                        <div className="nav-buttons">
                            <a className='nav-link' onClick={() => navigate('/')}>Sobre</a>
                            <a className='nav-link' href="Arthur Vitor Portuguese.docx" download="Arthur Vitor Portuguese.docx">Currículo</a>
                            <a className='nav-link' onClick={() => navigate('/projects')}>Projetos</a>
                        </div>
                    </div>

                    <div className="contact-icons">
                        <a href="https://github.com/ArthurVitor" target='_blank'><img src="/github-icon.svg" alt="GitHub Icon" /></a>
                        <a href="https://www.linkedin.com/in/arthur-vitor/" target='_blank'><img src="/linkedin-icon.svg" alt="Linkedin Icon" /></a>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export { NavBarComponent }
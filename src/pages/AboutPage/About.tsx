import "./About.css";
import { SkillComponent } from "../../components/Skill/SkillComponent";

export function About() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="content-container">
          <h2 className="my-name-is">Olá, meu nome é</h2>
          <p className="name">Arthur Vitor</p>
          <p className="sub-title">
            Sou treinee de desenvolvimento de software na DBServer.
          </p>
        </div>
      </div>

      <div className="grid-item">
        <div className="image-container">
          <img src="myself.png" alt="Picture of myself" />
        </div>
      </div>

      <div className="grid-item">
        <div className="content-container">
          <h2>Sobre mim</h2>
          <p className="history">
            Sou Desenvolvedor Backend com 1 ano e meio de experiência,
            especializado em Java e seu ecossistema. Tenho conhecimento sólido
            em SQL, REST APIs e boas práticas de desenvolvimento. Ao longo da
            minha trajetória, venho aprimorando minhas habilidades na construção
            de soluções robustas e escaláveis, focadas em eficiência e
            desempenho. Busco constantemente evoluir como profissional,
            explorando novas tecnologias e aprofundando meu domínio em
            arquiteturas backend.
          </p>
        </div>
      </div>
      <div className="grid-item">
        <div className="content-container">
            <h2>Habilidades</h2>
            <p style={{fontWeight: 600}}>Back end</p>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                <li className="skill-node"><SkillComponent skill="Java" stars={4}/></li>
                <li className="skill-node"><SkillComponent skill="SpringBoot" stars={4}/></li>
                <li className="skill-node"><SkillComponent skill="SpringSecurity" stars={2}/></li>
                <li className="skill-node"><SkillComponent skill="REST" stars={4}/></li>
                <li className="skill-node"><SkillComponent skill="Kafka" stars={3}/></li>
                <li className="skill-node"><SkillComponent skill="Docker" stars={3}/></li>
                <li className="skill-node"><SkillComponent skill="SQL" stars={3}/></li>
                <li className="skill-node"><SkillComponent skill="Python" stars={4}/></li>
            </ul>

            <p style={{fontWeight: 600, marginTop: 20}}>Front end</p>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                <li className="skill-node"><SkillComponent skill="HTML" stars={4}/></li>
                <li className="skill-node"><SkillComponent skill="CSS" stars={3}/></li>
                <li className="skill-node"><SkillComponent skill="JavaScript" stars={4}/></li>
                <li className="skill-node"><SkillComponent skill="React" stars={3}/></li>
                <li className="skill-node"><SkillComponent skill="Node" stars={3}/></li>
                <li className="skill-node"><SkillComponent skill="TypeScript" stars={4}/></li>
                
            </ul>
        </div>
      </div>
    </div>
  );
}

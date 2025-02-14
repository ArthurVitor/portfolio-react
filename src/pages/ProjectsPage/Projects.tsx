import { CardComponent, CardComponentProps } from "../../components/Card/CardComponent";
import "./Projects.css";

export function Projects() {
    const cards: CardComponentProps[] = [
        {
            title: 'PetCare API',
            description: 'Criada utilizando SpringBoot em sua essência, a PetCareAPI permite que qualquer consiga criar e gerenciar seus pets, agendando vacinas, verificando historicos de doenças, cirurgias e muito mais!',
            stack: 'SpringBoot, Java, Docker, Postgres',
            buttons: [
                {
                    link: 'https://github.com/ArthurVitor/pet-api-spring',
                    title: 'GitHub'
                },
            ]
        },
        {
            title: 'Locadora NestJs W.I.P',
            description: 'Utilizando NestJS, desenvolvi uma aplicação que utiliza as melhores práticas do ambiente NestJS para criar uma experiência intuitiva e altamente modular para o usuário que decidir usá-la.',
            stack: 'NestJs, TypeScript, Docker',
            buttons: [
                {
                    link: 'https://github.com/ArthurVitor/locadora-nestjs',
                    title: 'GitHub'
                },
            ]
        },
        {
            title: 'Imobiliaria API W.I.P',
            description: 'API Imobiliária, criada utilizando Spring Boot e seus derivados. Esta API faz parte de um conglomerado muito maior do que a API em si, sendo desenvolvida para facilitar a forma como os agentes podem cadastrar e gerenciar seus imóveis. A API imobiliária busca mitigar dificuldades e tornar mais fácil a interação dos usuários com a aplicação.',
            stack: 'SpringBoot, SpringSecurity, Docker, JWT',
            buttons: [
                {
                    link: 'https://github.com/ArthurVitor/imobiliaria-back',
                    title: 'GitHub'
                }
            ]
        },
        {
            title: 'StockApp API',
            description: 'Desenvolvida em conjunto com outra colega, a API do StockApp tem tudo o que um dono de mercado deseja. Com ela, o usuário pode gerenciar e modificar todo o seu estoque, desde operações simples até o remanejamento de estoques utilizando notas de entrada e saída.',
            stack: 'DOT.NET, ASP.NET, EF Core, Docker',
            buttons: [
                {
                    link: 'https://github.com/ArthurVitor/stockapp-back',
                    title: 'GitHub'
                }
            ]
        }
    ]


  return (
    <>
      <div className="title-container">
        <div className="my-projects">
          <h1 className="my">Meus</h1>
          <h1 className="projects">Projetos</h1>
        </div>
      </div>
      <div className="projects-container">
        {
            cards.map((card, index) => (
                <CardComponent key={index} title={card.title} image={card.image} description={card.description} stack={card.stack} buttons={card.buttons}/>
            ))
        }
      </div>
    </>
  );
}

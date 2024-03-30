export interface User {
  name: string
  profession: string;
  age: number;
  cel: string;
  stack: string[];
  languages: string;
  about: string;
  moreAbout: string;
  aboutWork: string;
  aboutArch: string;
  url: string;
}

const userProps: User =
{
  name: 'Guilherme Novaes',
  profession: 'Fullstack Developer',
  age: 23,
  cel: '(16)98844-8896',
  stack: ['Javascript', 'Typescript', 'React', 'Nextjs', 'Nodejs', 'Expressjs', 'MySQL', 'MongoDB'],
  languages: 'Ingles (técnico) · Português (nativo)',
  about: 'Olá! Sou Guilherme Rogério Novaes, um entusiasta da programação de 23 anos, apaixonado por criar soluções digitais e explorar as infinitas possibilidades do mundo da tecnologia. Ao longo dos últimos três anos, mergulhei fundo no universo da programação, concentrando meus esforços na área Fullstack, que me permite dominar tanto o desenvolvimento front-end quanto o back-end de aplicações web.',
  moreAbout: 'Olá! Sou Guilherme Rogério Novaes, desenvolvedor de 23 anos, apaixonado por criar soluções digitais e explorar as infinitas possibilidades do mundo da tecnologia. Ao longo dos últimos três anos, mergulhei fundo no universo da programação, concentrando meus esforços na área Fullstack, que me permite dominar tanto o desenvolvimento front-end quanto o back-end de aplicações web.\nAlém das habilidades técnicas, sou um profissional comprometido com a entrega de resultados de alta qualidade. Tenho uma abordagem detalhista para o desenvolvimento, buscando sempre aprimorar a usabilidade e a performance das aplicações que construo.\nAtualmente estou em busca de novos desafios e oportunidades para aplicar meu conhecimento e paixão pelo desenvolvimento Fullstack.\nMeu objetivo é contribuir para o crescimento e o sucesso dos projetos em que estou envolvido, sempre com ética, responsabilidade e respeito pela equipe de trabalho.',
  aboutWork: 'Atualmente estou atuando como Desenvolvedor Fullstack na empresa Centro Educacional Interativo, onde estou ativamente como responsável pelo desenvolvimento de uma aplicação para manutenção e registro de ponto dos funcionários para empresa, buscando criar uma interface amigável e funcional.',
  aboutArch: 'O sistema operacional que mais utilizo é o Linux, uma plataforma que comecei a explorar recentemente e estou completamente fascinado por tudo relacionado a ele. E a propósito, utilizo o Arch Linux, um sistema que se concentra principalmente no uso do terminal, permitindo-me ter controle total do sistema apenas por meio dele. Realizei algumas personalizações no meu sistema, incluindo o ambiente gráfico Hyprland, que é baseado em Wayland e Portals. Esse ambiente me oferece a capacidade de realizar customizações incríveis e ter controle total sobre todos os aspectos do meu sistema. Estou muito empolgado para compartilhar mais sobre essa experiência que tem me cativado tanto.\nNo contexto do desenvolvimento, utilizo o Arch Linux e o ambiente gráfico Hyprland para desenvolvimento web. Uma ferramenta essencial nesse processo é o Neovim, um editor de texto altamente configurável que me auxilia no desenvolvimento web, proporcionando recursos avançados de edição e personalização. Com essa combinação, tenho um ambiente de trabalho eficiente e adaptado às minhas necessidades como desenvolvedor. Estou muito empolgado para compartilhar mais sobre essa experiência que tem me cativado tanto.',
  url: 'https://media.licdn.com/dms/image/D4D03AQGfDFjHvBPEmQ/profile-displayphoto-shrink_200_200/0/1668177160670?e=1715212800&v=beta&t=E_pRRnSOK-4gnwfeN4jTZwQ5ssgtmzAWM6zfuibVWLU'
}

export default userProps;

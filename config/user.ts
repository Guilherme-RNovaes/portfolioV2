export interface User {
  name: string
  profession: string;
  age: number;
  cel: string;
  stack: string[];
  about: string;
  moreAbout: string;
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
  about: 'Olá! Sou Guilherme Rogério Novaes, um entusiasta da programação de 23 anos, apaixonado por criar soluções digitais e explorar as infinitas possibilidades do mundo da tecnologia. Ao longo dos últimos três anos, mergulhei fundo no universo da programação, concentrando meus esforços na área Fullstack, que me permite dominar tanto o desenvolvimento front-end quanto o back-end de aplicações web.',
  moreAbout: 'Olá! Sou Guilherme Rogério Novaes, um entusiasta da programação de 23 anos, apaixonado por criar soluções digitais e explorar as infinitas possibilidades do mundo da tecnologia. Ao longo dos últimos três anos, mergulhei fundo no universo da programação, concentrando meus esforços na área Fullstack, que me permite dominar tanto o desenvolvimento front-end quanto o back-end de aplicações web. Além das habilidades técnicas, sou um profissional comprometido com a entrega de resultados de alta qualidade. Tenho uma abordagem detalhista para o desenvolvimento, buscando sempre aprimorar a usabilidade e a performance das aplicações que construo.Atualmente estou em busca de novos desafios e oportunidades para aplicar meu conhecimento e paixão pelo desenvolvimento Fullstack. Meu objetivo é contribuir para o crescimento e o sucesso dos projetos em que estou envolvido, sempre com ética, responsabilidade e respeito pela equipe de trabalho.',
  aboutArch: 'Meu principal sistema operacional é o linux, mundo o qual adentrei recentemente e estou simplesmente encantado com tudo relacionado a ele. E a propósito, eu utilizo arch linux, um sistema baseado principalmente no terminal, o qual posso ter o total controle do sistema somente com o terminal. Meu sistema contém algumas modificações, utilizo o ambiente gráfico Hyprland, o qual é um ambiente baseado em wayland e portals, neste ambiente tenho controle e possibilidade de criar personalizações incríveis, tenho controle sobre tudo no meu sistema e gostaria de compartilhar um pouco sobre esse mundo o qual tanto me encantou.',
  url: 'https://media.licdn.com/dms/image/D4D03AQGfDFjHvBPEmQ/profile-displayphoto-shrink_200_200/0/1668177160670?e=1715212800&v=beta&t=E_pRRnSOK-4gnwfeN4jTZwQ5ssgtmzAWM6zfuibVWLU'
}

export default userProps;

export interface User {
  name: string;
  profession: string;
  cel: string;
  stack: string[];
  about: string;
  url: string;
}

const userProps: User =
{
  name: 'Guilherme Novaes',
  profession: 'Fullstack Developer',
  cel: '(16)98844-8896',
  stack: ['Javascript', 'Typescript', 'React', 'Nextjs', 'Nodejs', 'Expressjs', 'MySQL', 'MongoDB'],
  about: 'Olá! Sou Guilherme Rogério Novaes, um entusiasta da programação de 23 anos, apaixonado por criar soluções digitais e explorar as infinitas possibilidades do mundo da tecnologia. Ao longo dos últimos três anos, mergulhei fundo no universo da programação, concentrando meus esforços na área Fullstack, que me permite dominar tanto o desenvolvimento front-end quanto o back-end de aplicações web.',
  url: 'https://media.licdn.com/dms/image/D4D03AQGfDFjHvBPEmQ/profile-displayphoto-shrink_200_200/0/1668177160670?e=1715212800&v=beta&t=E_pRRnSOK-4gnwfeN4jTZwQ5ssgtmzAWM6zfuibVWLU'
}

export default userProps;

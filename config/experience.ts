type ExperienceDate = `${number}-${number}-${number}`;
export type ExperienceModel = {
  company: string;
  office: string;
  startDate: ExperienceDate;
  endDate?: ExperienceDate;
  image: string;
};

export const experiencesList: ExperienceModel[] = [
  {
    company: "Primax Online",
    office: "Analista de sistemas",
    startDate: "2019-07-10",
    endDate: "2022-03-30",
    image: "/img/primax_logo.png",
  },
  {
    company: "Welmax Construtora",
    office: "Auxiliar administrativo",
    startDate: "2019-07-10",
    endDate: "2022-03-30",
    image: "",
  },
  /*
    {
      company: "CPFL Atende",
      office: "Atendente de Telemarketing",
      startDate: "2022-04-06",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Y0IYlrwwvDiY5tuojVRyVgYTob_B4v3s9R_TDdfJ0bCxgk3YqO9BmhyONkHJyg-R048&usqp=CAU",
    },
  */
  {
    company: "Centro Educ. Interativo",
    office: "Desenvolvedor Fullstack",
    startDate: "2024-01-20",
    endDate: "2024-07-30",
    image: "/img/interativo_logo.jpg",
  },
  {
    company: "Autônomo",
    office: "Desenvolvedor Fullstack",
    startDate: "2023-06-20",
    image: "/img/autonomo_logo.jpg",
  },
];

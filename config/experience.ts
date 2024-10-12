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
    image: "http://primaxonline.com.br/site/assets/images/logos/Logo_Primax_desk.png",
  },
  {
    company: "Welmax Construtora",
    office: "Auxiliar administrativo",
    startDate: "2019-07-10",
    endDate: "2022-03-30",
    image: "",
  },
  {
    company: "CPFL Atende",
    office: "Atendente de Telemarketing",
    startDate: "2022-04-06",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Y0IYlrwwvDiY5tuojVRyVgYTob_B4v3s9R_TDdfJ0bCxgk3YqO9BmhyONkHJyg-R048&usqp=CAU",
  },
  {
    company: "Centro Educ. Interativo",
    office: "Desenvolvedor Fullstack",
    startDate: "2023-06-20",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAA0lBMVEX///83VZ5Fqow3VaFFro9JR0ktSIkdKlQvZVbg4N/m4+SPi4klQovBvbn29/Hz9O/NycouhGstbVslaFfZ19gxT5v4+PhgX1smh2zY09Cenp22trbx8vIjRpnGxsYoSZmtraplf3e1vNClpqaQnb1CW5+Ylpg/P0JtbWtab6uMl75oebLU2eSBjbnLztxgdKcgO31dZHWAf39VV2VCSVk1Rm5GRUFSZ6ihqsyutNEAOCptfa2gqMCJko28w9A2SUQ3fmpRa2U2mn4HGUJlcW0ARDHR0JUKAAADWElEQVRoge2XbXuaMBSG4+heiBOtTdJqIKEg7bQVO7dVrdatW/f//9ISXgQtBFC77QN3P1B6Xb09PpycBABqampqampqDgdRAq6u35bi+lM1t0mBCZrvtFLg82py4iJdyBulqCoHJgKvJ5f8G7mG8avJ8XAwusGHyEm+3Lodj/0J3l9+xUiunDsza+1ph8jzK+eLmeVbB8TiKiq31hin5JUXUUB+5hb3G3Es2t3nZt89llwbOhyPHRy7W8Qw9OmR5Hxx09D4KJZ/Ae122+jDo8jxcM3lJf4eXw0pb1aRI9PMlmPPT3Wh4N20bbTtSqFPWeZUxNbYb2ytfZHQt3MXVYqENV/KMW+M/IHV2KX6yDV3+xxbN44/2ik74O5e34EUf0Bazmfz24VnZai1j3avNz3rpniAgBT5EzmfrZ0l5y/NgbxlGP2TNB8g0PWycmvuz3hG0Sn5mxSFcpKS80XGUyyQK2n1Nw8Uj1YKd46cKStPRi72sVYsP4nNoVw5ykgnlmsTJ/tJpuVXpxcxgZwgW51MJOfzZd6z3Mjbei9mGlZeshX5aqhyh/INxmMob9FScjwoUbmx4bFEKyZysTeomiXMvNWPeQ7lYqjmQ5NuEZu9ql2yY4Gqyl0KY7nm+ZOsoaKU9zsquZtMRawt1mOLc5z6AuJEJ+7xrtwksVw14SGByWzxOB74a2ewnAxnnifuZ8PJcjyYr+RGGmTOXIn9vdv9EWVetO2lRy62tOF4vnAiFqvBaLmceNvdAi7FSIyWP6sgD5KQQWARD5eITIKYwlhieTxb3KJNtdz5PJAzW0KfYjlBrGCJVpC3dfFjX5QcuTaFleSyC+nPRI56+W7xukXLvs3JbglIy91+QeXTX+9LcX/+fCl5SuREh6r1L4C7J4Y8aDfcmFM7kXL5VwKdxd6NvKNa/iG6zcSUQYQhE1LxUu0CYtuAESRuXPGWjRiQLZchLxy54r/EIZACW8rl8GdNwESUlFBxpdSWSyVHXrgTicopAjZDUqKLYilsEVv6EBN66BLWgUx8XIZcOc8jZAGyhugS/WVzE/26Xywl+dvy4/FSTjqoxDF6TzlgRUeLQ+SvukLLtOK+ciLb/0jy36dbPEC5vI4kN1lnGwLgMbuxpqampuZ/4Q/mGmcKKuiaDAAAAABJRU5ErkJggg==",
  },
];

type Job = {
  title: string;
  status: boolean; // controls whether the job is active or not in the job list
  location: string;
  description: string; // Will be a template string with Markdown support
};

const jobs: Job[] = [
  {
    title: "Software Engineer",
    status: true,
    location: "Remoto",
    description: `
## Sobre a vaga
Estamos em busca de um Software Engineer para se juntar à nossa equipe. O candidato ideal deve ter experiência em desenvolvimento de software, preferencialmente com foco em aplicações web e mobile.
## Requisitos
- Experiência com JavaScript e frameworks modernos (React, Angular, Vue.js)
- Conhecimento em Node.js e bancos de dados relacionais
- Habilidade em trabalhar com APIs RESTful
- Boa comunicação e trabalho em equipe
## Benefícios
- Salário competitivo
- Oportunidade de crescimento profissional
- Ambiente de trabalho colaborativo
`,
  },
  {
    title: "Data Scientist",
    status: true,
    location: "Híbrido",
    description: `## Sobre a vaga
Estamos procurando um Data Scientist para analisar grandes volumes de dados e extrair insights valiosos para a empresa. O candidato ideal deve ter forte conhecimento em estatística e machine learning.
## Requisitos
- Experiência com Python e bibliotecas de ciência de dados (Pandas, NumPy, Scikit-learn)
- Conhecimento em SQL e bancos de dados NoSQL
- Habilidade em visualização de dados (Tableau, Power BI, Matplotlib)
- Boa comunicação e capacidade de explicar resultados complexos de forma simples
## Benefícios
- Salário competitivo
- Oportunidade de trabalhar com tecnologias de ponta
- Ambiente de trabalho inovador
`,
  },
];

export default jobs;

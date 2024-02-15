import React from 'react';
import { useParams } from 'react-router-dom';




const projects = [
  {
    id: 1,
    title: 'Primeflix',
    description: 'Descrição do Projeto 1.',
    imageUrl:'../assets/primeflix.png',
    githubLink: 'https://github.com/fernandavcampos/PrimeFlix/blob/main/README.md'
    
  },
  {
    id: 2,
    title: 'Lista de Tarefas',
    description: 'Projeto Lista de Tarefas (To Do List) foi desenvolvido com ReactJS com o objetivo de organizar tarefas diárias.A interface amigável do projeto torna a criação e a gestão de tarefas mais simples e intuitiva.Com o filtro e ordenação, é possível visualizar as tarefas de acordo com sua preferência, permitindo uma organização mais estratégica e otimizada. Tecnologias usadas: Javascript e  React. O projeto pode ser visualizado em: https://unique-souffle-84b67d.netlify.app ',
    imageUrl: '../assets/lista-tarefas.jpeg',
    githubLink: 'https://github.com/fernandavcampos/Lista-de-tarefas?tab=readme-ov-file'
  },
  {
    id: 3,
    title: 'Formulário',
    description: 'Formulário de cadastro de notas, onde é possível inserir os nomes, as notas e ter a média e resultado final das notas de cada aluno cadastrado. É possível também editar ou excluir as notas, clicando nos botões ao lado. Tecnologia usada: Angular',
    imageUrl: '../assets/formulario.png',
    githubLink: 'https://github.com/fernandavcampos/Formulario'
  },
  {
    id: 4,
    title: 'Relógio Analógico',
    description: 'Relógio analógico desenvolvido usando ReactJS',
    imageUrl: '../assets/relogio.png',
    githubLink: 'https://github.com/fernandavcampos/relogioanalogico'
  },
];


const ProjectDetails = () => {
  const { id } = useParams();

  // Encontrar o projeto com base no ID fornecido na URL
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} style={{ width: '400px', height: '200px' }}  />
      <p>{project.description}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Ver no Github</a>
    </div>
  );
 
};

export default ProjectDetails;

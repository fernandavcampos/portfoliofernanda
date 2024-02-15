import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Primeflix'},
  { id: 2, title: 'Lista de Tarefas' },
  { id: 3, title: 'Formulário' },
  { id: 4, title: 'Relógio' },
  
];

const Projects = () => {
  return (
    <div>
      <h2>Meus Projetos</h2>
      <p>Aqui é possível ver a descrição de alguns dos meus projetos. Estarei sempre atualizando, mas também é possível acessar meu <strong><a href='https://github.com/fernandavcampos' target='_blank'>Github</a></strong>para estar acompanhando outros projetos existentes. 
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projetos/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
     
    </div>
  );
 
};

export default Projects;

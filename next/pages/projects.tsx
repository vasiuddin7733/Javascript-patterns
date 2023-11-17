import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../src/components/patterns/presentational/projectCard';
import ProjectOverview from '../src/components/patterns/presentational/projectOverview';
import '../style/index.module.css';


function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    let octokit = new Octokit();
    octokit.rest.repos
      .listForOrg({
        org: 'code-with-ahsan',
        type: 'public',
      })
      .then(({ data: projects }) => {
        console.log({ projects });
        setProjects(projects);
      });
  }, []);
  return (
    <div className="App flex flex-col flex-1 justify-center items-center">
      <div className="projects mt-10 w-10/12 relative z-10 divide-y divide-slate-100 my-auto xl:mt-18 dark:divide-slate-200/5 dark:highlight-white/10">
        <div className="list divide-y divide-slate-100 gap-4 grid grid-cols-1 md:grid-cols-2 pb-10">
          {projects.map((project) => (
            <ProjectCard
              item={project}
              onProjectClick={() => {
                setSelectedProject(project);
              }}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectOverview
            onModalClosed={() => {
              setSelectedProject(null);
            }}
            project={selectedProject}
          />
        )}
      </div>
    </div>
  );
}

export default Projects
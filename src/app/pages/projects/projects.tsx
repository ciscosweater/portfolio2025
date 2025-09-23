'use client'
import React from 'react';
import ProjectGrid from '@/app/components/projectGrid/projectGrid';
import ProjectFilter from '@/app/components/projectFilter/projectFilter';
import styles from './projects.module.css';
import projectsData from '@/data/projects.json';

export default function Projects() {
  const [filter, setFilter] = React.useState('all');

  // Get all unique tags from projects
  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    projectsData.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Meus Projetos</h1>
          <p className={styles.subtitle}>
            Uma coleção de projetos desenvolvidos com diversas tecnologias e conceitos
          </p>
        </div>

        <ProjectFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          tags={allTags}
          projectCount={projectsData.length}
        />

        <ProjectGrid projects={projectsData} filter={filter} />
      </div>
    </div>
  );
}

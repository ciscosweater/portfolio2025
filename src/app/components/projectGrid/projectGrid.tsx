'use client'
import React from 'react';
import ProjectCard, { Project } from '../projectCard/projectCard';
import { useGallery } from '@/app/contexts/GalleryContext';
import styles from './projectGrid.module.css';

interface ProjectGridProps {
  projects: Project[];
  filter?: string;
}

export default function ProjectGrid({ projects, filter = 'all' }: ProjectGridProps) {
  const { openGallery } = useGallery();

  const filteredProjects = React.useMemo(() => {
    if (filter === 'all') return projects;
    if (filter === 'featured') return projects.filter(p => p.featured);
    return projects.filter(p => p.tags.includes(filter));
  }, [projects, filter]);

  return (
    <>
      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenGallery={openGallery}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className={styles.noResults}>
          <h3>Nenhum projeto encontrado</h3>
          <p>Tente ajustar os filtros ou volte mais tarde para novos projetos.</p>
        </div>
      )}
    </>
  );
}

'use client'
import React from 'react';
import ProjectGallery from './projectGallery/projectGallery';
import { useGallery } from '@/app/contexts/GalleryContext';

export default function GlobalGallery() {
  const { selectedProject, isGalleryOpen, closeGallery } = useGallery();

  return (
    <ProjectGallery
      project={selectedProject}
      isOpen={isGalleryOpen}
      onClose={closeGallery}
    />
  );
}

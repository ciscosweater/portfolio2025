'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project } from '@/app/components/projectCard/projectCard';

interface GalleryContextType {
  selectedProject: Project | null;
  isGalleryOpen: boolean;
  openGallery: (project: Project) => void;
  closeGallery: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
  };

  return (
    <GalleryContext.Provider value={{
      selectedProject,
      isGalleryOpen,
      openGallery,
      closeGallery
    }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
}

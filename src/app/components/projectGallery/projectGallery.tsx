'use client'
import React from 'react';
import Image from 'next/image';
import styles from './projectGallery.module.css';
import { Project } from '../projectCard/projectCard';

interface ProjectGalleryProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectGallery({ project, isOpen, onClose }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNext = () => {
    if (!project) return;
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = () => {
    if (!project) return;
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        handlePrev();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      default:
        break;
    }
  };

  const getWebpPath = (imgPath: string) => {
    if (!imgPath || typeof imgPath !== 'string') return '';
    return imgPath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  };

  if (!isOpen || !project) return null;

  return (
    <div 
      className={styles.overlay}
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button 
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fechar galeria"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>{project.title}</h2>
          {project.subtitle && (
            <span className={styles.subtitle}>{project.subtitle}</span>
          )}
        </div>

        <div className={styles.galleryContainer}>
          <div className={styles.imageWrapper}>
            {project.images.length > 0 && (
              <Image
                src={getWebpPath(project.images[currentIndex] || '')}
                alt={`${project.title} - ${project.captions[currentIndex] || `Imagem ${currentIndex + 1}`}`}
                fill
                className={styles.galleryImage}
                sizes="90vw"
                quality={90}
                priority={currentIndex === 0}
              />
            )}
          </div>

          {project.images.length > 1 && (
            <>
              <button 
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={handlePrev}
                aria-label="Imagem anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button 
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={handleNext}
                aria-label="Próxima imagem"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.caption}>
            {project.captions[currentIndex] || `Imagem ${currentIndex + 1} de ${project.images.length}`}
          </div>
          
          <div className={styles.counter}>
            {currentIndex + 1} / {project.images.length}
          </div>

          {project.images.length > 1 && (
            <div className={styles.thumbnails}>
              {project.images.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ver imagem ${index + 1}`}
                >
                  <Image
                    src={getWebpPath(image || '')}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className={styles.thumbnailImage}
                    sizes="60px"
                    quality={60}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitBtn}
            onClick={(e) => e.stopPropagation()}
          >
            {project.canVisit ? "Visitar Projeto" : "Ver Repositório"}
          </a>
        </div>
      </div>
    </div>
  );
}

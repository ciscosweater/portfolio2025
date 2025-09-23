"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./projectCard.module.css";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  captions: string[];
  link: string;
  canVisit: boolean;
  tags: string[];
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  onOpenGallery: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpenGallery,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Auto-rotate images on hover
  React.useEffect(() => {
    if (!isHovered || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  const getWebpPath = (imgPath: string) => {
    return imgPath.replace(/\.(png|jpg|jpeg)$/, ".webp");
  };

  return (
    <div
      className={`${styles.card} ${project.featured ? styles.featured : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        {project.images.length > 0 && (
          <>
            <Image
              src={getWebpPath(project.images[currentImageIndex])}
              alt={project.title}
              fill
              className={styles.projectImage}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              quality={85}
            />
            {project.images.length > 1 && (
              <div className={styles.imageIndicator}>
                {currentImageIndex + 1} / {project.images.length}
              </div>
            )}
            <button
              className={styles.viewGalleryBtn}
              onClick={() => onOpenGallery(project)}
              aria-label="Ver galeria de imagens"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </button>
          </>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.subtitle && (
            <span className={styles.subtitle}>{project.subtitle}</span>
          )}
        </div>

        <p className={styles.description}>
          {project.description}
        </p>

        <div className={styles.tags}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className={styles.tag}>+{project.tags.length - 4}</span>
          )}
        </div>

        <div className={styles.actions}>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            {project.canVisit ? "Visitar Projeto" : "Ver Repositório"}
          </Link>

          {project.images.length > 1 && (
            <button
              className={styles.secondaryBtn}
              onClick={() => onOpenGallery(project)}
            >
              Ver Screenshots
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

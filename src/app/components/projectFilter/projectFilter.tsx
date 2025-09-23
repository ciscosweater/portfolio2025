'use client'
import React from 'react';
import styles from './projectFilter.module.css';

interface ProjectFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  tags: string[];
  projectCount: number;
}

export default function ProjectFilter({ 
  currentFilter, 
  onFilterChange, 
  tags, 
  projectCount 
}: ProjectFilterProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const filterOptions = [
    { value: 'all', label: 'Todos os Projetos', count: projectCount },
    { value: 'featured', label: 'Destaques', count: projectCount },
    ...tags.map(tag => ({
      value: tag,
      label: tag,
      count: 0 // Will be calculated dynamically
    }))
  ];

  const handleFilterClick = (filterValue: string) => {
    onFilterChange(filterValue);
    setIsExpanded(false);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader}>
        <span className={styles.resultCount}>
          {currentFilter === 'all' ? projectCount : 'Vários'} projetos encontrados
        </span>
        <button 
          className={styles.toggleBtn}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Menos filtros' : 'Mais filtros'}
          <svg 
            className={`${styles.arrow} ${isExpanded ? styles.rotated : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      <div className={`${styles.filterOptions} ${isExpanded ? styles.expanded : ''}`}>
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className={`${styles.filterBtn} ${currentFilter === option.value ? styles.active : ''}`}
            onClick={() => handleFilterClick(option.value)}
          >
            <span className={styles.filterLabel}>{option.label}</span>
            {option.count > 0 && (
              <span className={styles.filterCount}>{option.count}</span>
            )}
          </button>
        ))}
      </div>

      {/* Quick filters for mobile */}
      <div className={styles.quickFilters}>
        <button
          className={`${styles.quickFilterBtn} ${currentFilter === 'all' ? styles.active : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          Todos
        </button>
        <button
          className={`${styles.quickFilterBtn} ${currentFilter === 'featured' ? styles.active : ''}`}
          onClick={() => handleFilterClick('featured')}
        >
          Destaques
        </button>
        <button
          className={`${styles.quickFilterBtn} ${currentFilter === 'react' ? styles.active : ''}`}
          onClick={() => handleFilterClick('react')}
        >
          React
        </button>
        <button
          className={`${styles.quickFilterBtn} ${currentFilter === 'nextjs' ? styles.active : ''}`}
          onClick={() => handleFilterClick('nextjs')}
        >
          Next.js
        </button>
      </div>
    </div>
  );
}

'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type EmblaCarouselArrowButtonProps = {
  carouselApi: ReturnType<typeof useEmblaCarousel>[1] | null
  direction: 'prev' | 'next'
  canScrollPrev?: boolean
  canScrollNext?: boolean
}

export const EmblaCarouselArrowButton: React.FC<EmblaCarouselArrowButtonProps> = ({
  carouselApi,
  direction,
  canScrollPrev = false,
  canScrollNext = false
}) => {
  const handleClick = () => {
    if (direction === 'prev') {
      carouselApi?.scrollPrev()
    } else {
      carouselApi?.scrollNext()
    }
  }

  const isDisabled = direction === 'prev' ? !canScrollPrev : !canScrollNext

  return (
    <button
      className={`embla__arrow embla__arrow--${direction} ${
        isDisabled ? 'embla__arrow--disabled' : ''
      }`}
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={direction === 'prev' ? 'Slide anterior' : 'Próximo slide'}
      style={{
        background: '#415A77',
        border: '1px solid #415A77',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        color: '#E0E1DD',
        fontSize: '16px',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.4 : 1,
        transition: 'opacity 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        margin: '0'
      }}
    >
      {direction === 'prev' ? '‹' : '›'}
    </button>
  )
}
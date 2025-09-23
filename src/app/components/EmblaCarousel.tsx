import React, { useCallback, useState, useEffect } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { EmblaCarouselArrowButton } from './EmblaCarouselArrowButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./embla.module.css"

type PropType = {
  slides: Array<React.ReactNode>
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateNavigationButtons = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    updateNavigationButtons()
    emblaApi.on('select', updateNavigationButtons)
    emblaApi.on('reInit', updateNavigationButtons)

    return () => {
      emblaApi.off('select', updateNavigationButtons)
      emblaApi.off('reInit', updateNavigationButtons)
    }
  }, [emblaApi, updateNavigationButtons])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide: React.ReactNode,index:number) => (
            <div className={styles.embla__slide} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__arrows}>
          <EmblaCarouselArrowButton carouselApi={emblaApi} direction="prev" canScrollPrev={canScrollPrev} />
          <EmblaCarouselArrowButton carouselApi={emblaApi} direction="next" canScrollNext={canScrollNext} />
        </div>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot} ${index === selectedIndex ? styles.embla__dotSelected : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
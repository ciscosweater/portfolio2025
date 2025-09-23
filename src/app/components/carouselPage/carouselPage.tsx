'use client'
import Link from "next/link";
import styles from "./carouselPage.module.css"
import React from "react";
import Image from "next/image";

interface CarouselPageProps {
    title: string;
    subtitle?: string;
    description: string;
    images?: Array<string>;
    captions?: Array<string>;
    link: string;
    canVisit: boolean;
}

export default function CarouselPage(props: CarouselPageProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    // Supondo que props.images seja um array com os caminhos/nomes das imagens
    const images = props.images || []; // Array de imagens vindo via props
    
    // Converter para WebP quando disponível
    const webpImages = images.map(img => {
        const webpPath = img.replace(/\.(png|jpg|jpeg)$/, '.webp');
        return webpPath;
    });
    const captions = props.captions || []; // Array opcional de legendas

    // Funções para navegar entre as imagens
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <h1>{props.title}</h1>
                {props.subtitle && <h3>{props.subtitle}</h3>}
                <p>{props.description}</p>
                <Link href={props.link} target="_blank" rel="noopener noreferrer" passHref>
                    <button className={styles.linkButton}>
                        <span>{props.canVisit === true? "Visitar" : "Link do repositório"}</span>
                    </button>
                </Link>
            </div>
            <div className={styles.rightBox}>
                {images.length > 0 ? (
                <>
                    <div className={styles.picture}>
                    <Image
                    src={webpImages[currentIndex]}
                    fill
                    alt="Screenshot do projeto"
                    className={styles.currentPicture}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                    quality={95}
                    priority={false}
                    />
                    </div>
                    <div className={styles.controls}>
                    <button onClick={handlePrev} className={`${styles.button} ${styles.buttonLeft}`}>
                        {"<"}
                    </button>
                    <button onClick={handleNext} className={`${styles.button} ${styles.buttonRight}`}>
                        {">"}
                    </button>
                    </div>
                    <p className={styles.caption}>
                    {captions[currentIndex] || `Imagem ${currentIndex + 1} de ${images.length}`}
                    </p>
                    <p className={styles.counter}>
                        {currentIndex + 1} de {images.length}
                    </p>
                </>
                ) : (
                <p>Nenhuma imagem disponível</p>
                )}
            </div>
        </div>
        </>
    )
}
import styles from "./carouselText.module.css"

interface CarouselTextProps {
    title: string;
    subtitle?: string; // O "?" torna subtitle opcional
    period: string;
    description: string;
    moreInfo?: string;
}

export default function CarouselText(props: CarouselTextProps) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.titleDiv}>
                <h1>{props.title}</h1>
                {props.subtitle && <h3>{props.subtitle}</h3>}
                <h3>{props.period}</h3>
            </div>
            <p>{props.description}</p>
            {props.moreInfo && <p>{props.moreInfo}</p>}
        </div>
        </>
    )
}
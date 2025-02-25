import styles from "./carouselPage.module.css"

export default function CarouselPage(props: any) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className={styles.rightBox}>
                <div className={styles.picture}></div>
            </div>
        </div>
        </>
    )
}
import CarouselPage from "@/app/components/carouselPage/carouselPage";
import EmblaCarousel from "../../components/EmblaCarousel";
import styles from "./projects.module.css";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
    <CarouselPage />,
    <CarouselPage />,
    <CarouselPage />,
    <CarouselPage />,
    <CarouselPage />
];

export default function Projects() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>
    )
}
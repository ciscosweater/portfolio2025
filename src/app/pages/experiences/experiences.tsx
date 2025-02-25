import CarouselPage from "@/app/components/carouselPage/carouselPage";
import EmblaCarousel from "../../components/EmblaCarousel";
import styles from "./experiences.module.css";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
    <CarouselPage 
    title="Um"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper feugiat malesuada. Nulla porta vulputate lacus sit amet pellentesque. In efficitur turpis in nisl posuere eleifend. Integer blandit enim mi, vel varius eros vulputate rutrum. Integer blandit nibh nec lorem varius, at semper diam pharetra. Fusce eu tincidunt lorem. Curabitur aliquam interdum ligula nec laoreet. Cras in orci dolor. "
    />,
    <CarouselPage 
    title="Dois"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper feugiat malesuada. Nulla porta vulputate lacus sit amet pellentesque. In efficitur turpis in nisl posuere eleifend. Integer blandit enim mi, vel varius eros vulputate rutrum. Integer blandit nibh nec lorem varius, at semper diam pharetra. Fusce eu tincidunt lorem. Curabitur aliquam interdum ligula nec laoreet. Cras in orci dolor. "
    />,
    <CarouselPage 
    title="Três"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper feugiat malesuada. Nulla porta vulputate lacus sit amet pellentesque. In efficitur turpis in nisl posuere eleifend. Integer blandit enim mi, vel varius eros vulputate rutrum. Integer blandit nibh nec lorem varius, at semper diam pharetra. Fusce eu tincidunt lorem. Curabitur aliquam interdum ligula nec laoreet. Cras in orci dolor. "
    />
];


export default function Experiences() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>
    )
}
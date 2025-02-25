import CarouselText from "@/app/components/carouselText/carouselText";
import EmblaCarousel from "../../components/EmblaCarousel";
import styles from "./certifications.module.css";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
    <CarouselText 
    title="Profissão Programador"
    subtitle="Paulo Borges"
    description="Front-end, Back-end, Arquitetura e padrões de projeto, cloud, dentre outros temas fascinantes do mundo de Desenvolvimento de Sistemas, que abrangem desde a criação de interfaces intuitivas até a construção de soluções robustas e escaláveis, integrando tecnologias modernas e boas práticas para atender às demandas atuais do mercado."
    period="Jan. de 2023 - Abril de 2023"
    
    />,
    <CarouselText 
    title="FreeCodeCamp"
    description="Design Responsivo para Web, Algoritmos e estruturas de dados em JavaScript e Bibliotecas de desenvolvimento em Front-End, que juntos permitem criar experiências digitais adaptáveis a diferentes dispositivos, otimizando a performance com lógicas bem estruturadas e aproveitando o poder de ferramentas modernas para acelerar e enriquecer o desenvolvimento de interfaces interativas e funcionais."
    period="Dez. de 2022 - Mar. de 2023"
    />,
    <CarouselText 
    title="Next.js e React - Curso Completo"
    subtitle="COD3R Cursos"
    description="Next.js, React.js, estratégias SPA, SSR e SSG, Firebase, integração com Tailwind CSS e TypeScript, deploy na nuvem, oferecendo uma formação completa que combina frameworks poderosos, técnicas avançadas de renderização, gerenciamento de dados em tempo real e estilização eficiente, culminando na publicação de aplicações modernas e otimizadas em ambientes de cloud computing."
    period="Jun. de 2023 - Jul. de 2023"
    />
];


export default function Certifications() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>
    )
}
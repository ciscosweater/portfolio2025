import CarouselText from "@/app/components/carouselText/carouselText";
import EmblaCarousel from "../../components/EmblaCarousel";
import styles from "./experiences.module.css";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
    <CarouselText 
    title="Desenhista Técnico"
    subtitle="Estágio"
    description="Como estagiário de engenharia civil, era responsável por criar modelos 3D detalhados no Trueplan a partir de plantas baixas, garantindo a precisão das informações e a conformidade com os projetos. Meu trabalho envolvia analisar cuidadosamente as plantas fornecidas, converter os dados em representações tridimensionais e realizar ajustes necessários para assegurar que os modelos refletissem fielmente as especificações técnicas, contribuindo para a qualidade e a organização do planejamento das obras."
    period="Mai. de 2023 – Ago. de 2024"
    />,
    <CarouselText 
    title="Front-End de Sistema de Gerenciamento de Rastreamento Veicular"
    description="Trabalhei como programador no desenvolvimento do site/aplicativo Movetrak, uma empresa de rastreamento de veículos. Minha equipe era responsável pela parte visual e interativa do sistema (Front-End). Criei diversas páginas e funcionalidades importantes para o funcionamento do sistema."
    moreInfo="Tecnologias utilizadas: Next.JS, HTML5, CSS3, Node.JS, TypeScript, Figma, MariaDB."
    period="Jul. de 2023 – Freelance"
    />,
    <CarouselText 
    title="Cardápio Delivery"
    subtitle="Deliciê Brigadeiros"
    description="Desenvolvi do zero, como freelancer, uma aplicação de cardápio online para agilizar a demanda da doceria Deliciê Brigadeiros no período de Páscoa. O menu foi projetado para ser fácil de usar em celulares, permitindo que os clientes escolhessem os brigadeiros, adicionassem ao carrinho e enviassem o pedido diretamente para o WhatsApp da loja com apenas um clique. A solução, com uma interface intuitiva e funcional, facilitou o acesso ao menu e os pedidos personalizados, otimizando o fluxo de trabalho da equipe durante um dos períodos mais movimentados do ano. Como resultado, a aplicação aumentou a eficiência operacional, melhorou a experiência do cliente e contribuiu para um impacto positivo nas vendas e na satisfação do público."
    moreInfo="Tecnologias utilizadas: React.JS, HTML5, CSS3, JavaScript, Styled-Components, React Hooks."
    period="Mar. de 2023 – Freelance"
    />,
    <CarouselText 
    title="Designer Gráfico"
    subtitle="Cisco - Design Gráfico, Barreiras, BA"
    description="Trabalhei como freelancer de design gráfico, atendendo diversos tipos de clientes, desenvolvendo desde logotipos e identidades visuais, até artes para postagens em redes sociais. Meu papel envolvia compreender as necessidades específicas de cada cliente, criar soluções visuais criativas e alinhadas à sua marca, além de entregar materiais de alta qualidade dentro dos prazos estabelecidos, contribuindo para fortalecer a presença visual deles no mercado."
    period="Jun. de 2021 – Ago. de 2022"
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
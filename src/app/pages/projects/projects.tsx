import CarouselPage from "@/app/components/carouselPage/carouselPage";
import EmblaCarousel from "../../components/EmblaCarousel";
import styles from "./projects.module.css";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
    <CarouselPage
        key="cardapio" 
        title="Cardápio - Delivery"
        subtitle="React"
        description="Cardápio interativo desenvolvido utilizando React e seus Hooks, retorna ao usuário o seu carrinho de compras, o total a ser pago pelos itens e envia para o WhatsApp do estabelecimento uma mensagem com o resumo do pedido. A implementação com React proporciona uma experiência dinâmica e fluida, enquanto os Hooks foram utilizados para gerenciar o estado do carrinho e os cálculos em tempo real, oferecendo praticidade e interatividade ao usuário. A funcionalidade de envio para o WhatsApp foi integrada de forma eficiente, permitindo uma comunicação direta e conveniente com o estabelecimento, otimizando o processo de compra e tornando o cardápio uma ferramenta moderna e acessível."
        images={["/assets/screenshots/cardapio/home.png", "/assets/screenshots/cardapio/homemobile.png", "/assets/screenshots/cardapio/checkout.png", "/assets/screenshots/cardapio/ordermobile.png"]}
        captions={["Versão Desktop", "Versão Mobile", "Carrinho","Pedido"]}
        link="https://ciscosweater.github.io/cardapiodelicie/"
        canVisit={true}
    />,
    <CarouselPage
        key="ytinterface" 
        title="Youtube - Interface"
        subtitle="React"
        description="Clone apenas da interface do YouTube, com responsividade para mobile, desenvolvido utilizando o React, apresenta menu lateral e header funcionais, diversas páginas, e uma aparência limpa e moderna que se aproxima do verdadeiro YouTube. O projeto inclui navegação intuitiva entre as seções, como página inicial, vídeos em destaque e área de pesquisa, além de suporte a temas claro e escuro para melhor experiência do usuário. Os componentes foram estruturados de forma modular, garantindo fácil manutenção e escalabilidade, com atenção especial aos detalhes visuais, como tipografia, ícones e animações sutis, que refletem o design característico da plataforma original."
        images={["/assets/screenshots/youtube/home.png", "/assets/screenshots/youtube/home2.png", "/assets/screenshots/youtube/mobile.png"]}
        captions={["Página inicial", "Menu Lateral", "Responsividade"]}
        link="https://ciscosweater.github.io/youtube/"
        canVisit={true}
    />,
    <CarouselPage
        key="ytcompleto" 
        title="Youtube - Completo"
        subtitle="React, Node.JS e MariaDB"
        description="Clone apenas da interface do YouTube, com responsividade para mobile, desenvolvido utilizando o React, apresenta menu lateral e header funcionais, diversas páginas, e uma aparência limpa e moderna que se aproxima do verdadeiro YouTube. O projeto inclui navegação intuitiva entre as seções, como página inicial, vídeos em destaque e área de pesquisa, além de suporte a temas claro e escuro para melhor experiência do usuário. Os componentes foram estruturados de forma modular, garantindo fácil manutenção e escalabilidade, com atenção especial aos detalhes visuais, como tipografia, ícones e animações sutis, que refletem o design característico da plataforma original."
        images={["/assets/screenshots/youtube2/home.png", "/assets/screenshots/youtube2/openmenu.png", "/assets/screenshots/youtube2/login.png", "/assets/screenshots/youtube2/signup.png", "/assets/screenshots/youtube2/sended.png", "/assets/screenshots/youtube2/shorts.png", "/assets/screenshots/youtube2/search.png", "/assets/screenshots/youtube2/subscriptions.png", "/assets/screenshots/youtube2/upload.png"]}
        captions={["Página inicial", "Menu Lateral", "Login", "Cadastro", "Vídeos enviados", "Shorts", "Busca", "Inscrições", "Upload"]}
        link="https://github.com/ciscosweater/youtube"
        canVisit={false}
    />,
    <CarouselPage
        key="whatsapp" 
        title="WhatsApp"
        subtitle="React, Node.JS, MariaDB e Socket-io"
        description="Chat em tempo real desenvolvido com React, TypeScript, MariaDB, Node.JS e Socket.IO. Ainda em desenvolvimento, mas conta com um chat geral, cadastro e login de contas, design limpo e intuitivo que se aproxima fielmente ao WhatsApp que conhecemos. O sistema suporta mensagens instantâneas com baixa latência, exibição de status de conexão dos usuários e notificações em tempo real, proporcionando uma experiência fluida. A arquitetura utiliza uma combinação eficiente entre o backend em Node.JS para gerenciar as conexões e o banco MariaDB para armazenar dados de usuários e histórico de conversas, enquanto o frontend em React com TypeScript garante um código robusto e uma interface responsiva, adaptável a diferentes dispositivos."
        images={["/assets/screenshots/whatsapp/home.png", "/assets/screenshots/whatsapp/chat.png"]}
        captions={["Home","Chat"]}
        link="https://github.com/ciscosweater/frontend-whatsapp"
        canVisit={false}
    />,
    <CarouselPage
        key="quizgamer" 
        title="Quiz Gamer"
        subtitle="Next.js"
        description="Este projeto foi completamente desenvolvido utilizando o Next.js. Com essa tecnologia, os jogadores têm a oportunidade de desfrutar de uma experiência fluida e responsiva. O Next.js assume a lógica do Quiz e o banco de questões, aproveitando o renderização híbrida (SSR e SSG) para otimizar o desempenho e melhorar o carregamento das páginas. O sistema inclui um design interativo com feedback imediato para as respostas, suporte a múltiplas categorias de perguntas e um painel de pontuação dinâmico, tudo estruturado de forma a garantir escalabilidade e facilidade de atualização do conteúdo. Além disso, a integração com APIs permite a expansão do banco de questões e a personalização da experiência do usuário."
        images={["/assets/screenshots/quiztimer/home.png", "/assets/screenshots/quiztimer/question.png", "/assets/screenshots/quiztimer/answer.png", "/assets/screenshots/quiztimer/results.png"]}
        captions={["Home","Pergunta", "Resposta", "Resultado"]}
        link="https://quiz-gamer.vercel.app/"
        canVisit={true}
    />,
    <CarouselPage
        key="montyhall" 
        title="Problema de Monty Hall"
        subtitle="Next.js"
        description="Um projeto Next.js inspirado no problema de Monty Hall, oferecendo uma aplicação interativa para o usuário escolher a quantidade de portas que serão geradas e em qual porta estará o presente, a fim de recriar e debater o paradoxo. A aplicação permite que o usuário selecione uma porta inicial e decida se deseja manter sua escolha ou trocá-la após a revelação de uma porta vazia. Além disso, apresenta estatísticas sobre as chances de vitória ao longo de múltiplas simulações, ajudando a visualizar o impacto da estratégia de troca. Com uma interface intuitiva e responsiva, o projeto serve como uma ferramenta educacional envolvente para explorar conceitos de probabilidade e tomada de decisão."
        images={["/assets/screenshots/montyhall/home.png", "/assets/screenshots/montyhall/portas.png", "/assets/screenshots/montyhall/presente.png"]}
        captions={["Home","Portas", "Presente"]}
        link="https://portas-nine.vercel.app/"
        canVisit={true}
    />,
    <CarouselPage
        key="enigma" 
        title="Enigma"
        subtitle="React"
        description="Uma aplicação desafiadora e divertida construída com React. Aqui, você terá a chance de testar seu conhecimento e habilidades em adivinhação com charadas. A aplicação é rápida, fácil de usar e oferece uma experiência de usuário incrível, com um design intuitivo e interativo. Cada charada traz múltiplas opções de resposta, feedback instantâneo e dicas para ajudar na resolução. Além disso, um sistema de pontuação e níveis de dificuldade progressivos tornam o jogo ainda mais envolvente. Ideal para quem quer se divertir enquanto exercita o raciocínio lógico e a criatividade!"
        images={["/assets/screenshots/enigma/desktop.png", "/assets/screenshots/enigma/mobile.png"]}
        captions={["Desktop","Mobile"]}
        link="https://ciscosweater.github.io/enigma/"
        canVisit={true}
    />,
    <CarouselPage
        key="batman" 
        title="Batman"
        subtitle="HTML e CSS"
        description="Este projeto de site promocional para o filme do Batman foi desenvolvido utilizando HTML e CSS. Apresenta uma interface elegante e atraente, com um design limpo e moderno para promover o filme e atrair o público. A estrutura em HTML proporciona uma base sólida e organizada, enquanto o CSS foi aplicado para estilizar os elementos, garantindo uma estética visual impactante que reflete a essência sombria e icônica do universo do Batman. A combinação dessas tecnologias resultou em um site responsivo e funcional, ideal para engajar os fãs e destacar os principais aspectos do filme."
        images={["/assets/screenshots/batman/home.png", "/assets/screenshots/batman/comentarios.png", "/assets/screenshots/batman/mobile.png"]}
        captions={["Home","Comentários","Responsividade"]}
        link="https://ciscosweater.github.io/batman/"
        canVisit={true}
    />
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
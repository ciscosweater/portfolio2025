import styles from "./about.module.css";
import Image from "next/image";
import React from "react";

interface Tech {
    asset: string;
    label: string;
  }

const TECHS: Record<string, Tech> = {
  css: { asset: 'css', label: 'CSS' },
  git: { asset: 'git', label: 'Git' },
  github: { asset: 'github', label: 'GitHub' },
  html: { asset: 'html', label: 'HTML' },
  javascript: { asset: 'javascript', label: 'JavaScript' },
  mariadb: { asset: 'mariadb', label: 'MariaDB' },
  nextjs: { asset: 'nextjs', label: 'Next.JS' },
  node: { asset: 'node', label: 'Node.JS' },
  react: { asset: 'react', label: 'React' },
  typescript: { asset: 'typescript', label: 'TypeScript'}
};

export default function AboutMe() {

    const renderTechs = (key: string) => (
        <div key={key} className={styles.tech}>
          <Image
            src={`/assets/techs/${TECHS[key].asset}.png`}
            width={75}
            height={75}
            alt={TECHS[key].label}
          />
          <p>{TECHS[key].label}</p>
        </div>
      );

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.leftBox}>
                    <Image 
                        src={'/assets/profile.jpg'}
                        width={300}
                        height={300}
                        alt=""
                        className={styles.profilePicture}
                    />
                    <button>
                        <Image
                            src={'/assets/profile.jpg'}
                            width={20}
                            height={20}
                            alt=""
                        />
                        <span>Currículo</span>
                    </button>
                    <button>
                        <span>Github</span>
                    </button>
                    <button>
                        <span>Email</span>
                    </button>
                </div>
                <div className={styles.rightBox}>
                    <h1>Sobre mim</h1>
                    <p>Sou um estudante de engenharia civil em transição para a área de programação, guiado por uma paixão genuína por tecnologia e inovação. Tenho habilidades sólidas e abrangentes no ecossistema JavaScript, com domínio em TypeScript, Node.js, React e Next.js, desenvolvidas e refinadas por meio de projetos desafiadores que testaram minha criatividade e capacidade técnica. Busco constantemente oportunidades para expandir meu conhecimento, enfrentar novos desafios e contribuir de forma significativa para o sucesso de projetos ambiciosos. Com fluência em inglês e uma compreensão avançada que me permite acompanhar discussões técnicas complexas, estou pronto para integrar equipes inovadoras, aplicar minhas competências com excelência e agregar valor em ambientes dinâmicos e colaborativos </p>
                    <h1>Tecnologias</h1>
                    <div className={styles.techDiv}>
                        {Object.keys(TECHS).map((key) => renderTechs(key))}
                    </div>
                </div>
            </div>
        </div>
    )
}
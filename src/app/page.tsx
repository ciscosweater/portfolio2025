'use client'
import styles from "./page.module.css";
import AboutMe from "./pages/about/about";
import React from "react";
import Projects from "./pages/projects/projects";

type OptionType = {
  component: React.ComponentType;
  label: string;
};

const OPTIONS: Record<string, OptionType> = {
  about: { component: AboutMe, label: 'Sobre mim' },
  projects: { component: Projects, label: 'Projetos' }
};

export default function Home() {
  const [option, setOption] = React.useState("about");

  const RenderedComponent = React.useMemo(() => {
    const Component = OPTIONS[option].component;
    return <Component />;
  }, [option]);

  const renderMenuOption = (key: keyof typeof OPTIONS) => (
    <React.Fragment key={key}>
      <h3
        className={option === key ? styles.optionSelected : styles.option}
        onClick={() => setOption(key)}
      >
        {OPTIONS[key].label}
      </h3>
      {key !== 'projects' && <div className={styles.barDivider} />}
    </React.Fragment>
  );

  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.center}>
          <h1>Oi, eu sou Gustavo Francisco!</h1>
          <h2>Desenvolvedor FullStack</h2>
        </div>
        <div className={styles.bottom}>
          <h4>Role pra baixo para saber mais</h4>
        </div>
      </div>
      <div className={styles.selectionBar}>
        {Object.keys(OPTIONS).map(renderMenuOption)}
      </div>
      {RenderedComponent}
    </>
  );
}

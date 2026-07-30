"use client";

import { useEffect, useState } from "react";

const notices = [
  {
    eyebrow: "Todos os domingos",
    title: "Domingo é dia de celebrar em família",
    text: "Uma noite de comunhão, louvor e uma palavra para toda a família.",
    detail: "19h • Av. 31, nº 2013",
    tone: "green",
  },
  {
    eyebrow: "Radicais Livres",
    title: "Uma geração apaixonada por Jesus",
    text: "O nosso encontro de jovens acontece todos os sábados. Você é nosso convidado.",
    detail: "Sábado • 19h",
    tone: "purple",
  },
  {
    eyebrow: "Encontre sua célula",
    title: "A igreja também acontece nas casas",
    text: "Conecte-se com pessoas, cresça na fé e viva o cuidado de Deus durante a semana.",
    detail: "Adultos • Jovens • Kids",
    tone: "blue",
  },
];

const cells = [
  {
    name: "Célula Adultos 01",
    category: "Adultos",
    day: "Dia a cadastrar",
    time: "—",
    area: "Local a cadastrar",
    kids: false,
  },
  {
    name: "Célula Adultos 02",
    category: "Adultos",
    day: "Dia a cadastrar",
    time: "—",
    area: "Local a cadastrar",
    kids: false,
  },
  {
    name: "Célula de Jovens",
    category: "Jovens",
    day: "Agenda a cadastrar",
    time: "—",
    area: "Local a cadastrar",
    kids: false,
  },
  {
    name: "Célula RL",
    category: "Jovens",
    day: "Agenda a cadastrar",
    time: "—",
    area: "Local a cadastrar",
    kids: false,
  },
  {
    name: "Célula Kids",
    category: "Kids",
    day: "Quarta-feira",
    time: "19h30",
    area: "Rua Dr. David Ribeiro",
    kids: false,
  },
  {
    name: "Kids em paralelo",
    category: "Kids",
    day: "Cadastro pendente",
    time: "—",
    area: "Vincular a uma célula de adultos",
    kids: false,
  },
];

const services = [
  {
    short: "Celebração",
    title: "Culto da Família",
    day: "Domingo",
    time: "19h00",
    text: "Uma noite para toda a família celebrar, adorar e crescer na Palavra.",
    tone: "green",
    mark: "V",
  },
  {
    short: "Radicais Livres",
    title: "Culto RL",
    day: "Sábado",
    time: "19h00",
    text: "O encontro do nosso ministério de jovens: intenso, relevante e cheio de propósito.",
    tone: "purple",
    mark: "RL",
  },
  {
    short: "Radicais Kids",
    title: "Culto Kids",
    day: "Domingo",
    time: "19h00",
    text: "Uma experiência preparada para as crianças, em paralelo ao Culto de Celebração.",
    tone: "blue",
    mark: "K",
  },
];

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={direction === "left" ? "icon icon-left" : "icon"}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const [notice, setNotice] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cellFilter, setCellFilter] = useState("Todas");

  useEffect(() => {
    const timer = window.setInterval(
      () => setNotice((current) => (current + 1) % notices.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  const moveNotice = (step: number) => {
    setNotice((current) => (current + step + notices.length) % notices.length);
  };

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Videira Ituiutaba — início">
          <img src="/assets/logo-videira.webp" alt="" />
          <span>
            <strong>Videira</strong>
            <small>Ituiutaba</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav-open" : ""} aria-label="Navegação principal">
          {["Sobre", "Células", "Cultos", "Pastor", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("é", "e")}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>
            Quero conhecer
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Seja bem-vindo
          </p>
          <h1>
            Igreja Videira
            <span>Ituiutaba</span>
          </h1>
          <p className="hero-description">Uma igreja de vencedores.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              Quero conhecer <Arrow />
            </a>
            <a className="button button-ghost" href="#cultos">
              Ver horários
            </a>
          </div>
          <div className="hero-meta">
            <span className="pulse-dot" />
            <p>
              Próximo culto
              <strong>Domingo, às 19h</strong>
            </p>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="logo-halo" />
          <img src="/assets/logo-videira.webp" alt="" />
          <span className="floating-pill pill-one">Comunhão</span>
          <span className="floating-pill pill-two">Propósito</span>
          <span className="floating-pill pill-three">Família</span>
        </div>

        <a className="scroll-hint" href="#avisos" aria-label="Ir para avisos">
          <span />
          Descubra
        </a>
      </section>

      <section className="section notices-section" id="avisos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span />
              Fique por dentro
            </p>
            <h2>Últimos avisos</h2>
          </div>
          <div className="notice-controls">
            <button type="button" onClick={() => moveNotice(-1)} aria-label="Aviso anterior">
              <Arrow direction="left" />
            </button>
            <button type="button" onClick={() => moveNotice(1)} aria-label="Próximo aviso">
              <Arrow />
            </button>
          </div>
        </div>

        <div className={`notice-card notice-${notices[notice].tone}`}>
          <div className="notice-glow" />
          <div className="notice-logo" aria-hidden="true">
            <img src="/assets/logo-videira.webp" alt="" />
          </div>
          <div className="notice-content">
            <p>{notices[notice].eyebrow}</p>
            <h3>{notices[notice].title}</h3>
            <span>{notices[notice].text}</span>
            <strong>{notices[notice].detail}</strong>
          </div>
          <div className="notice-count" aria-label={`Aviso ${notice + 1} de ${notices.length}`}>
            0{notice + 1} <span>/ 0{notices.length}</span>
          </div>
        </div>

        <div className="notice-dots" role="tablist" aria-label="Selecionar aviso">
          {notices.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={index === notice ? "active" : ""}
              onClick={() => setNotice(index)}
              aria-label={`Exibir aviso ${index + 1}`}
              aria-selected={index === notice}
              role="tab"
            />
          ))}
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-logo">
              <img src="/assets/logo-videira.webp" alt="Símbolo da Igreja Videira" />
            </div>
            <div className="about-word">VIDEIRA</div>
            <div className="about-stat">
              <strong>1</strong>
              <span>
                igreja
                <br />
                em células
              </span>
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow eyebrow-light">
              <span />
              Nossa essência
            </p>
            <h2>
              Uma igreja para
              <span>viver e pertencer.</span>
            </h2>
            <p>
              Somos uma comunidade que ama a Deus, cuida de pessoas e acredita que cada
              casa pode ser uma extensão da igreja. Aqui, relacionamentos são construídos
              e vidas encontram direção, comunhão e propósito.
            </p>

            <div className="mission-grid">
              <article>
                <span>01</span>
                <h3>Nossa visão</h3>
                <p>
                  Formar vencedores que expressem Jesus em cada área da vida e façam
                  diferença onde estiverem.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Nosso propósito</h3>
                <p>
                  Levar pessoas a um relacionamento crescente com Deus por meio da
                  Palavra, da comunhão e do cuidado.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section cells-section" id="celulas">
        <div className="section-heading cells-heading">
          <div>
            <p className="eyebrow">
              <span />
              Igreja nas casas
            </p>
            <h2>Encontre uma célula</h2>
            <p className="section-intro">
              Tem sempre uma família pronta para receber você perto da sua casa.
            </p>
            <p className="cells-draft-note">
              Estrutura demonstrativa — substituiremos pelos dados oficiais das células.
            </p>
          </div>
        </div>

        <div className="filter-row" role="tablist" aria-label="Filtrar células por categoria">
          {["Todas", "Adultos", "Jovens", "Kids"].map((filter) => (
            <button
              type="button"
              key={filter}
              className={cellFilter === filter ? "active" : ""}
              onClick={() => setCellFilter(filter)}
              role="tab"
              aria-selected={cellFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="cells-grid">
          {cells
            .filter((cell) => cellFilter === "Todas" || cell.category === cellFilter)
            .map((cell, index) => (
              <article className={`cell-card category-${cell.category.toLowerCase()}`} key={cell.name}>
                <div className="cell-top">
                  <span className="cell-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="cell-category">{cell.category}</span>
                </div>
                <h3>{cell.name}</h3>
                <p className="cell-area">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {cell.area}
                </p>
                <div className="cell-info">
                  <span>{cell.day}</span>
                  <strong>{cell.time}</strong>
                </div>
                {cell.kids && (
                  <div className="kids-parallel">
                    <span>Kids</span>
                    Célula infantil em paralelo
                  </div>
                )}
                <a
                  href={`https://wa.me/553498857771?text=${encodeURIComponent(
                    `Olá! Quero saber mais sobre a ${cell.name}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero participar <Arrow />
                </a>
              </article>
            ))}
        </div>

        <div className="cells-help">
          <p>
            <strong>Não sabe qual escolher?</strong>
            Fale com a nossa equipe e encontre a célula mais próxima.
          </p>
          <a
            href="https://wa.me/553498857771?text=Olá! Quero encontrar uma célula perto de mim."
            target="_blank"
            rel="noreferrer"
          >
            Encontrar pelo WhatsApp <Arrow />
          </a>
        </div>
      </section>

      <section className="services-section" id="cultos">
        <div className="services-inner">
          <div className="section-heading services-heading">
            <div>
              <p className="eyebrow eyebrow-light">
                <span />
                Próximos encontros
              </p>
              <h2>Um lugar para todos.</h2>
            </div>
            <p>
              Escolha o encontro ideal para você e venha viver uma experiência em família.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className={`service-card service-${service.tone}`} key={service.title}>
                <div className="service-art" aria-hidden="true">
                  {service.title === "Culto Kids" ? (
                    <img src="/assets/logo-radicais-kids.webp" alt="" />
                  ) : (
                    <strong>{service.mark}</strong>
                  )}
                  <span>0{index + 1}</span>
                </div>
                <div className="service-copy">
                  <p>{service.short}</p>
                  <h3>{service.title}</h3>
                  <span>{service.text}</span>
                  <div className="service-time">
                    <strong>{service.day}</strong>
                    <b>{service.time}</b>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pastor-section" id="pastor">
        <div className="pastor-inner">
          <div className="pastor-photo">
            <div className="pastor-ring" />
            <img src="/assets/foto-pastor.webp" alt="Pastor da Igreja Videira Ituiutaba" />
            <div className="pastor-caption">
              <span>Pastor local</span>
              <strong>Pr. Araújo</strong>
            </div>
          </div>

          <div className="pastor-copy">
            <p className="eyebrow">
              <span />
              Liderança
            </p>
            <h2>Uma vida dedicada a servir pessoas.</h2>
            <p>
              O Pr. Araújo lidera a Igreja Videira Ituiutaba com amor pela Palavra,
              simplicidade e uma profunda paixão por pessoas. Sua missão é ajudar cada
              pessoa a descobrir sua identidade em Deus, amadurecer na fé e viver uma
              vida que inspira outros.
            </p>
            <p>
              Ao lado de uma equipe de líderes e discipuladores, trabalha para construir
              uma igreja acolhedora, relevante e comprometida com as famílias de
              Ituiutaba.
            </p>
            <div className="pastor-signature">Pr. Araújo</div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">
              <span />
              Venha nos visitar
            </p>
            <h2>Você já faz parte desta família.</h2>
            <p>
              Será uma alegria receber você. Se tiver alguma dúvida, fale com a nossa
              equipe antes da sua visita.
            </p>

            <div className="contact-list">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.%2031%2C%202013%2C%20Ituiutaba%20MG"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">↗</span>
                <span>
                  <small>Endereço</small>
                  <strong>Av. 31, nº 2013 • Ituiutaba, MG</strong>
                </span>
              </a>
              <a
                href="https://wa.me/553498857771"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">W</span>
                <span>
                  <small>WhatsApp</small>
                  <strong>+55 34 9885-7771</strong>
                </span>
              </a>
              <a
                href="https://www.instagram.com/videiraituiutaba/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">@</span>
                <span>
                  <small>Instagram</small>
                  <strong>@videiraituiutaba</strong>
                </span>
              </a>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              title="Localização da Igreja Videira Ituiutaba"
              src="https://www.google.com/maps?q=Av.%2031%2C%202013%2C%20Ituiutaba%2C%20MG&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.%2031%2C%202013%2C%20Ituiutaba%20MG"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/assets/logo-videira-completa.webp" alt="Videira — Igreja em Células" />
        </div>
        <div className="footer-links">
          <a href="#sobre">Sobre</a>
          <a href="#celulas">Células</a>
          <a href="#cultos">Cultos</a>
          <a href="#contato">Contato</a>
        </div>
        <p>© 2026 Igreja Videira Ituiutaba. Todos os direitos reservados.</p>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/553498857771?text=Olá! Gostaria de conhecer a Igreja Videira Ituiutaba."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Igreja Videira pelo WhatsApp"
      >
        W
        <span>Fale conosco</span>
      </a>
    </main>
  );
}

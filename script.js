const stories = [
  {
    category: "Analysis",
    title: {
      en: "Is INSTAT Gabon’s published inflation rate reliable?",
      fr: "Le taux d’inflation publié par l’INSTAT Gabon est-il fiable ?"
    },
    excerpt: {
      en: "Gabon reports 1.3% inflation, yet the data needed to verify the figure remain difficult to access. A seven-criterion review of the country’s consumer price index.",
      fr: "Le Gabon affiche 1,3 % d’inflation, mais les données nécessaires pour vérifier ce chiffre restent difficiles d’accès. Une analyse de l’indice des prix en sept critères."
    },
    date: "2026-10-01",
    readTime: 8,
    mark: "1.3",
    url: { en: "Fiabilite_taux_inflation_INSTAT_Gabon_en.html", fr: "Fiabilite_taux_inflation_INSTAT_Gabon.html" }
  },
  {
    category: "Articles",
    title: { en: "The quiet power of asking a better question", fr: "Le pouvoir discret d’une meilleure question" },
    excerpt: {
      en: "Sometimes the most useful thing we can do is pause before reaching for an answer.",
      fr: "Parfois, le plus utile est de faire une pause avant de chercher une réponse."
    },
    date: "2026-09-14",
    readTime: 5,
    mark: "?"
  },
  {
    category: "Analysis",
    title: {
      en: "Is Gabon’s unemployment rate published by INSTAT reliable?",
      fr: "Le taux de chômage publié par l’INSTAT Gabon est-il fiable ?"
    },
    excerpt: {
      en: "A close reading of the 2024 national employment survey: sound nationally, fragile provincially, and in need of reconciliation with the census.",
      fr: "Une lecture des résultats de l’ENEC 2024 : solide au niveau national, fragile au niveau provincial, et à réconcilier avec le recensement."
    },
    date: "2026-09-12",
    readTime: 12,
    mark: "17",
    url: { en: "article-chomage-en.html", fr: "article-chomage.html" }
  },
  {
    category: "Opinion",
    title: { en: "We don't need more information. We need better attention.", fr: "Nous n’avons pas besoin de plus d’information, mais de mieux y prêter attention." },
    excerpt: {
      en: "In an age of endless updates, choosing what deserves our focus is its own kind of wisdom.",
      fr: "À l’ère des mises à jour incessantes, choisir ce qui mérite notre attention est une forme de sagesse."
    },
    date: "2026-09-11",
    readTime: 6,
    mark: "“"
  },
  {
    category: "News",
    title: { en: "A new chapter for the way we think about work", fr: "Un nouveau chapitre dans notre façon de penser le travail" },
    excerpt: {
      en: "A few signals worth watching as the conversation around work continues to shift.",
      fr: "Quelques signaux à suivre tandis que le débat sur le travail évolue."
    },
    date: "2026-09-08",
    readTime: 4,
    mark: "↗"
  },
  {
    category: "Analysis",
    title: { en: "What the numbers don't tell us about a changing economy", fr: "Ce que les chiffres ne disent pas d’une économie en mutation" },
    excerpt: {
      en: "Reading beyond the headline data to understand the human story underneath.",
      fr: "Au-delà des grands indicateurs, comprendre les réalités humaines qui se cachent derrière les chiffres."
    },
    date: "2026-09-04",
    readTime: 9,
    mark: "∿"
  },
  {
    category: "Analysis",
    title: {
      en: "Building an effective statistical system: legitimacy, credibility and independence",
      fr: "Fondements d’un système statistique efficace : légitimité, crédibilité et indépendance"
    },
    excerpt: {
      en: "Sixteen years after the call for an independent statistics agency, Gabon has created INSTAT. The next challenge is making it credible, independent and sustainable.",
      fr: "Seize ans après l’appel à une agence statistique indépendante, le Gabon a créé l’INSTAT. Le défi est désormais de la rendre crédible, indépendante et durable."
    },
    date: "2026-08-30",
    readTime: 12,
    mark: "∑",
    url: { en: "article-systeme-statistique-en.html", fr: "article-systeme-statistique.html" },
    originalUrl: "https://franklinstuff.blogspot.com/2026/09/gabon-fondements-dun-systeme.html"
  },
  {
    category: "Analysis",
    title: {
      en: "Gabon’s 2026 census: A critical analysis of the 3,518,621 population figure",
      fr: "Le recensement gabonais de 2026 : analyse critique du chiffre de 3 518 621 habitants"
    },
    excerpt: {
      en: "The certified census total implies population growth that published data cannot yet reconcile. What the figures show, what remains unknown, and what should be released.",
      fr: "Le chiffre homologué implique une croissance démographique que les données publiées ne permettent pas encore de réconcilier. Ce que montrent les chiffres et les données à publier."
    },
    date: "2026-08-29",
    readTime: 10,
    mark: "3.5",
    url: { en: "article-recensement-en.html", fr: "article-recensement.html" },
    originalUrl: "https://franklinstuff.blogspot.com/2026/08/gabon-le-recensement-gabonais-de-2026.html"
  },
  {
    category: "Articles",
    title: { en: "On making room for the unfinished thought", fr: "Faire place aux idées encore inachevées" },
    excerpt: {
      en: "Good ideas need space to develop. Here is why a little uncertainty can be useful.",
      fr: "Les bonnes idées ont besoin d’espace pour mûrir. Pourquoi un peu d’incertitude peut être utile."
    },
    date: "2026-08-29",
    readTime: 5,
    mark: "…"
  },
  {
    category: "Opinion",
    title: { en: "The case for looking beyond the next quarter", fr: "Pour une vision qui dépasse le prochain trimestre" },
    excerpt: {
      en: "Long-term thinking is not a luxury. It is a practice we can choose, every day.",
      fr: "La réflexion à long terme n’est pas un luxe. C’est un choix que nous pouvons faire chaque jour."
    },
    date: "2026-08-22",
    readTime: 7,
    mark: "∞"
  }
];

const translations = {
  en: {
    "skip-link": "Skip to content", "nav-latest": "Latest",
    "nav-analysis": "Analysis", "nav-opinion": "Opinion", "nav-about": "About",
    "header-cta": "Get the Sunday note <span aria-hidden=\"true\">↗</span>",
    "intro-eyebrow": "Independent perspectives, professional and expert analysis",
    "intro-title": "A little more <em>thought.</em><br>A lot more context.",
    "intro-description": "Ideas, analysis and considered opinion on the forces shaping our world. Less noise. More signal.",
    "intro-link": "Explore the latest <span aria-hidden=\"true\">↓</span>",
    "art-observe": "OBSERVE", "art-connect": "CONNECT THE DOTS", "intro-meta-label": "Notes from the wider world",
    "featured-eyebrow": "The big picture", "featured-title": "Worth a closer look",
    "issue-label": "FEATURED ANALYSIS <span>01 / 04</span>", "orbit-signal": "SIGNAL",
    "orbit-system": "SYSTEM", "orbit-shift": "SHIFT", "featured-art-caption": "A changing landscape, seen from above",
    "featured-category": "Analysis", "featured-read-time": "12 min read",
    "featured-story-title": "Is Gabon’s unemployment rate published by INSTAT reliable?",
    "featured-story-excerpt": "A close reading of the 2024 national employment survey: a sound national figure, fragile provincial estimates, and a population baseline that needs reconciling.",
    "by-label": "By", "featured-date": "September 12, 2026",
    "latest-eyebrow": "Fresh thinking", "latest-title": "The latest", "search-label": "Search articles",
    "filter-all": "Everything", "filter-analysis": "Analysis", "filter-articles": "Articles",
    "filter-opinion": "Opinion", "filter-news": "News", "sort-label": "IN ORDER OF PUBLICATION <span aria-hidden=\"true\">↓</span>",
    "empty-state": "No stories match that search. Try another term or category.",
    "load-more": "More to explore <span aria-hidden=\"true\">↓</span>",
    "newsletter-eyebrow": "A note worth opening", "newsletter-title": "The week, <em>in perspective.</em>",
    "newsletter-description": "One thoughtful email. The ideas, stories and questions worth carrying into your weekend.",
    "email-label": "Your email address",
    "form-note": "No noise, no spam. Unsubscribe whenever you like.",
    "about-eyebrow": "A note on this space", "about-index": "ABOUT / 001",
    "about-title": "Curiosity is a<br><em>way of seeing.</em>",
    "about-description": "Assoumou-Ndong's Blog is an independent publication by <strong>Franklin Assoumou-Ndong</strong> — a place to step back, look closer, and make sense of the stories that shape our lives.",
    "about-description-two": "Expect original analysis, useful context, and opinions held with an open mind. Always curious. Never certain for certainty’s sake.",
    "contact-link": "Start a conversation <span aria-hidden=\"true\">↗</span>",
    "footer-note": "Independent ideas, clearly considered.", "footer-about": "About",
    "footer-contact": "Contact", "footer-newsletter": "Newsletter"
  },
  fr: {
    "skip-link": "Passer au contenu",
    "nav-latest": "Publications", "nav-analysis": "Analyses", "nav-opinion": "Opinions", "nav-about": "À propos",
    "header-cta": "La note du dimanche <span aria-hidden=\"true\">↗</span>",
    "intro-eyebrow": "Perspectives indépendantes, analyses professionnelles et expertes",
    "intro-title": "Prendre le temps<br><em>de comprendre.</em>",
    "intro-description": "Des idées, des analyses et des opinions réfléchies sur les forces qui façonnent notre monde. Moins de bruit. Plus de sens.",
    "intro-link": "Voir les dernières publications <span aria-hidden=\"true\">↓</span>",
    "art-observe": "OBSERVER", "art-connect": "RELIER LES IDÉES", "intro-meta-label": "Regards sur le monde",
    "featured-eyebrow": "Prendre du recul", "featured-title": "À lire de plus près",
    "issue-label": "ANALYSE À LA UNE <span>01 / 04</span>", "orbit-signal": "SIGNAL",
    "orbit-system": "SYSTÈME", "orbit-shift": "MUTATION", "featured-art-caption": "Un paysage en mutation, vu d’en haut",
    "featured-category": "Analyse", "featured-read-time": "12 min de lecture",
    "featured-story-title": "Le taux de chômage publié par l’INSTAT Gabon est-il fiable ?",
    "featured-story-excerpt": "Une lecture des résultats de l’enquête nationale sur l’emploi de 2024 : un chiffre national solide, des taux provinciaux fragiles et une base démographique à réconcilier.",
    "by-label": "Par", "featured-date": "12 septembre 2026",
    "latest-eyebrow": "Des idées nouvelles", "latest-title": "Les publications",
    "search-label": "Rechercher des articles", "filter-all": "Tout voir", "filter-analysis": "Analyses",
    "filter-articles": "Articles", "filter-opinion": "Opinions", "filter-news": "Actualités",
    "sort-label": "PAR ORDRE DE PUBLICATION <span aria-hidden=\"true\">↓</span>",
    "empty-state": "Aucun article ne correspond. Essayez un autre terme ou une autre catégorie.",
    "load-more": "Découvrir davantage <span aria-hidden=\"true\">↓</span>",
    "newsletter-eyebrow": "Une note qui vaut la lecture",
    "newsletter-title": "La semaine, <em>en perspective.</em>",
    "newsletter-description": "Un courriel réfléchi. Des idées, des histoires et des questions à garder en tête pour le week-end.",
    "email-label": "Votre adresse courriel",
    "form-note": "Aucun bruit, aucun pourriel. Désabonnez-vous quand vous le souhaitez.",
    "about-eyebrow": "À propos de cet espace", "about-index": "À PROPOS / 001",
    "about-title": "La curiosité est<br><em>une façon de voir.</em>",
    "about-description": "Le Blog d'Assoumou-Ndong est une publication indépendante de <strong>Franklin Assoumou-Ndong</strong> — un espace pour prendre du recul, regarder de plus près et comprendre les histoires qui façonnent nos vies.",
    "about-description-two": "Au programme : des analyses originales, du contexte utile et des opinions ouvertes. Toujours curieux, jamais certain pour le simple plaisir de l’être.",
    "contact-link": "Entrer en contact <span aria-hidden=\"true\">↗</span>",
    "footer-note": "Des idées indépendantes, mises en perspective.",
    "footer-about": "À propos", "footer-contact": "Contact", "footer-newsletter": "Infolettre"
  }
};

const categories = {
  en: { Analysis: "Analysis", Articles: "Articles", Opinion: "Opinion", News: "News" },
  fr: { Analysis: "Analyse", Articles: "Articles", Opinion: "Opinion", News: "Actualités" }
};
const grid = document.querySelector("#article-grid");
const searchInput = document.querySelector("#article-search");
const emptyState = document.querySelector("#empty-state");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const categoryLinks = Array.from(document.querySelectorAll("[data-nav-category]"));
const form = document.querySelector("#newsletter-form");
const formNote = document.querySelector("#form-note");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const languageToggle = document.querySelector("#language-toggle");
let currentLanguage = new URLSearchParams(window.location.search).get("lang") === "fr" ? "fr" : "en";
let activeCategory = "All";
let newsletterSubmitted = false;

function setLanguage(nextLanguage) {
  currentLanguage = nextLanguage;
  searchInput.value = "";
  const locale = nextLanguage === "fr" ? "fr-CA" : "en-CA";
  document.documentElement.lang = locale;
  const siteName = nextLanguage === "fr" ? "Le Blog d'Assoumou-Ndong" : "Assoumou-Ndong's Blog";
  document.title = nextLanguage === "fr"
    ? `${siteName} — Des idées indépendantes, mises en perspective`
    : `${siteName} — Independent ideas, clearly considered`;
  document.querySelector("#header-site-name").textContent = siteName;
  document.querySelector("#footer-site-name").textContent = siteName;
  document.querySelector("#copyright-site-name").textContent = siteName;
  document.querySelector("#header-wordmark").setAttribute("aria-label", `${siteName} home`);
  document.querySelector("#footer-wordmark").setAttribute("aria-label", `${siteName} home`);
  document.querySelector('meta[name="description"]').content = nextLanguage === "fr"
    ? "Analyses indépendantes, essais réfléchis, opinions et actualités pour mieux comprendre le monde qui nous entoure."
    : "Independent analysis, thoughtful essays, opinion and the stories shaping what comes next.";

  Object.entries(translations[nextLanguage]).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = value;
  });
  document.querySelector("#article-search").placeholder = nextLanguage === "fr" ? "Rechercher un article..." : "Find a story...";
  document.querySelector("#email-address").placeholder = nextLanguage === "fr" ? "Votre adresse courriel" : "Your email address";
  document.querySelector("#category-filters").setAttribute("aria-label",
    nextLanguage === "fr" ? "Filtrer les articles par catégorie" : "Filter stories by category");
  primaryNav.setAttribute("aria-label", nextLanguage === "fr" ? "Navigation principale" : "Main navigation");
  if (newsletterSubmitted) {
    formNote.textContent = nextLanguage === "fr"
      ? "Merci pour votre intérêt. L’envoi de l’infolettre n’est pas encore configuré."
      : "Thanks for your interest. Newsletter delivery is not connected yet.";
  }
  languageToggle.textContent = nextLanguage === "fr" ? "EN" : "FR";
  languageToggle.setAttribute("lang", nextLanguage === "fr" ? "en-CA" : "fr-CA");
  languageToggle.setAttribute("aria-label", nextLanguage === "fr" ? "Switch to English" : "Passer au français");
  menuToggle.setAttribute("aria-label", nextLanguage === "fr" ? "Afficher ou masquer la navigation" : "Toggle navigation");
  document.querySelector("#featured-story-link").setAttribute("aria-label",
    nextLanguage === "fr" ? "Lire l’analyse sur le chômage" : "Read the unemployment analysis");
  document.querySelector("#subscribe-button").setAttribute("aria-label",
    nextLanguage === "fr" ? "S’abonner à la note du dimanche" : "Subscribe to the Sunday note");
  document.querySelector("#featured-story-link").href = nextLanguage === "fr" ? "article-chomage.html" : "article-chomage-en.html";
  document.querySelector("#current-date").textContent = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric"
  }).format(new Date());
  renderStories(nextLanguage);
}

function renderStories(language = currentLanguage) {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filteredStories = stories.filter((story) => {
    const matchesCategory = activeCategory === "All" || story.category === activeCategory;
    const matchesQuery = `${story.title[language]} ${story.excerpt[language]} ${categories[language][story.category]}`.toLocaleLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  grid.innerHTML = filteredStories.map((story, index) => {
    const categoryClass = story.category.toLocaleLowerCase();
    const dotClass = story.category === "Opinion" ? "opinion-dot" : story.category === "News" ? "news-dot" : "";
    const storyUrl = typeof story.url === "string" ? story.url : story.url?.[language] || "#about";
    const title = story.title[language];
    const category = categories[language][story.category];
    const date = story.dateLabel?.[language] || new Intl.DateTimeFormat(language === "fr" ? "fr-CA" : "en-CA", {
      year: "numeric", month: "long", day: "numeric", timeZone: "UTC"
    }).format(new Date(`${story.date}T00:00:00Z`));
    const readTime = language === "fr" ? `${story.readTime} min de lecture` : `${story.readTime} min read`;
    return `
      <article class="article-card" style="animation-delay:${index * 45}ms">
        <a class="card-art card-art-${categoryClass}" href="${storyUrl}" aria-label="${language === "fr" ? "Lire" : "Read"} : ${title}">
          <span class="card-art-mark" aria-hidden="true">${story.mark}</span>
        </a>
        <div class="card-topline">
          <span class="card-category"><span class="category-dot ${dotClass}"></span>${category}</span>
          <span class="card-read-time">${readTime}</span>
        </div>
        <h3><a href="${storyUrl}">${title}</a></h3>
        <p>${story.excerpt[language]}</p>
        <div class="card-footer"><span>${date}</span><a href="${storyUrl}" aria-label="${language === "fr" ? "Lire" : "Read"} ${title}">↗</a></div>
      </article>
    `;
  }).join("");

  emptyState.hidden = filteredStories.length > 0;
  grid.hidden = filteredStories.length === 0;
}

function selectCategory(category) {
  activeCategory = category;
  filterButtons.forEach((button) => {
    const selected = button.dataset.category === category;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderStories();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => selectCategory(button.dataset.category));
});

categoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectCategory(link.dataset.navCategory);
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

searchInput.addEventListener("input", () => renderStories());

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  primaryNav.classList.toggle("is-open", !expanded);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  newsletterSubmitted = true;
  formNote.textContent = currentLanguage === "fr"
    ? "Merci pour votre intérêt. L’envoi de l’infolettre n’est pas encore configuré."
    : "Thanks for your interest. Newsletter delivery is not connected yet.";
  formNote.classList.remove("is-error");
  formNote.classList.add("is-success");
  form.reset();
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
document.querySelector("#story-count").textContent = String(stories.length).padStart(2, "0");
languageToggle.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "fr" ? "en" : "fr";
  const url = new URL(window.location.href);
  url.searchParams.set("lang", nextLanguage);
  window.history.replaceState({}, "", url);
  primaryNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  setLanguage(nextLanguage);
});

setLanguage(currentLanguage);

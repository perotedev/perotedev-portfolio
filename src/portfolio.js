/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rodrigo Perote",
  title: "Oi, sou o Perote",
  subTitle: emoji(
    "Um engenheiro de software 🚀 com experiência na arquitetura e construção de aplicações Web e Mobile com Angular / Spring Boot / FastAPI / Android e outras bibliotecas e frameworks interessantes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vLuCslF_1DgirlppUV9QNab5NdgqETWc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/perotedev",
  linkedin: "https://www.linkedin.com/in/rodrigo-perote-mascarenhas-2b2a582a7",
  gmail: "rodripema@hotmail.com",
  gitlab: "https://gitlab.com/perotedev",
  instagram: "https://www.instagram.com/perotedev",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que faço?",
  subTitle:
    "PLANEJO, DESENVOLVO E FAÇO MANUTENÇÃO DE APLICAÇÕES EM DIFERENTES STACKS.",
  skills: [
    emoji(
      "⚡ Desenvolvimento de interfaces de usuário altamente interativas para suas aplicações web e mobile"
    ),
    emoji("⚡ Aplicações Web Progressivas (PWA) em stacks normais e SPA"),
    emoji("⚡ Integração com serviços de terceiros como Firebase/ GCP / AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "fastapi",
      svg: "fastapiLogo.svg"
    },
    {
      skillName: "springboot",
      svg: "springbootLogo.svg"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mysql",
      svg: "mysqlLogo.svg"
    },
    {
      skillName: "postgresql",
      svg: "postgreLogo.svg"
    },
    {
      skillName: "mongodb",
      svg: "mongoLogo.svg"
    },
    {
      skillName: "gcp",
      svg: "gcpLogo.svg"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gran Faculdade",
      logo: require("./assets/images/granfaculdadeLogo.png"),
      subHeader: "Pós-Graduação em Segurança da Informação - Lato Sensu",
      duration: "Dezembro 2024 - Em andamento",
      desc: "",
      dissertationLink: "",
      descBullets: []
    },
    {
      schoolName: "Gran Faculdade",
      logo: require("./assets/images/granfaculdadeLogo.png"),
      subHeader: "Pós-Graduação em Ciência de Dados - Lato Sensu",
      duration: "Dezembro 2024 - Em andamento",
      desc: "",
      dissertationLink: "",
      descBullets: []
    },
    {
      schoolName: "Instituto Federal do Amazonas - IFAM",
      logo: require("./assets/images/ifamLogo.png"),
      subHeader: "Bacharel em Engenharia de Software",
      duration: "Fevereiro 2019 - Fevereiro 2023",
      desc: "",
      dissertationLink: "http://repositorio.ifam.edu.br/jspui/handle/4321/1284",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Arquitetura",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desenvolvedor de Software Full Stack",
      company: "Projex Consulting",
      companylogo: require("./assets/images/projexLogo.jpg"),
      headerHex: "#B0EA0F",
      date: "Fevereiro 2024 – Presente",
      desc: "Desenvolvimento de aplicações web responsivas, atuando desde a análise de requisitos até a entrega e manutenção de sistemas. Trabalho em favor da padronização visual e orientação técnica da equipe.",
      descBullets: [
        "Análise de Requisitos",
        "Arquitetura de Software",
        "Design System",
        "Angular, React, FastAPI e Spring Boot",
        "PostgreSQL e Redis",
        "Sistemas em containers Docker",
        "Amazon Web Services - AWS"
      ]
    },
    {
      role: "Desenvolvedor de Software Full Stack",
      company: "Polícia Militar do Amazonas",
      companylogo: require("./assets/images/pmamLogo.png"),
      headerHex: "#0F6754",
      date: "Outubro 2021 – Fevereiro 2024",
      desc: "Desenvolvimento e manutenção de sistemas web e mobile, atuando com tecnologias como Angular, Spring Boot, Yii2, Android nativo, além de bancos de dados MySQL e MongoDB.",
      descBullets: [
        "Testes automatizados",
        "Pipelines de CI/CD",
        "Implantação de infraestrutura em nuvem",
        "Google Cloud Platform",
        "Integração com APIs externas",
        "Sistemas em containers Docker",
        "Segurança da Informação"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos",
  subtitle: "ALGUNS PROJETOS QUE DESENVOLVI OU PARTICIPEI ATIVAMENTE",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Portal da PMAM",
      projectDesc: "Portal de serviços de notícias da PMAM.",
      footerLink: [
        {
          name: "Visite a página",
          url: "https://pm.am.gov.br"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "SMI - Sistema Modular Integrado",
      projectDesc: "Sistema de controle e gerenciamento de material.",
      footerLink: [
        {
          name: "Visite a página",
          url: "https://smi.pm.am.gov.br"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "SISPMAM",
      projectDesc: "Aplicativo para o auxílio de operações policiais.",
      footerLink: [
        {
          name: "Visite a página",
          url: "https://play.google.com/store/apps/details?id=br.com.pmam.copmam&hl=pt_BR&pli=1"
        }
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "TaurusOne",
      projectDesc:
        "Sistema de gerenciamento de demandas e serviços em tempo real.",
      footerLink: [
        {
          name: "Visite a página",
          url: "https://taurusone.com.br"
        }
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Projex Instituicional",
      projectDesc: "Página instituicional da Projex Consulting.",
      footerLink: [
        {
          name: "Visite a página",
          url: "https://www.projexsystem.com"
        }
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Energin Sustentabilidade",
      projectDesc: "Página instituicional da Energim Sustentabilidade.",
      footerLink: [
        {
          name: "Visite a página",
          url: "https://energinam.com.br/pt-BR/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificações 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resumo",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contato ☎️"),
  subtitle: "Quer discutir um projeto ou apenas dar um oi?",
  // number: "+92-0000000000",
  email_address: "rodripema@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

// import icons
import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLink,
} from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

// import images
import AboutImg from "../src/assets/img/about.png";
import Feature1Img from "../src/assets/img/features/feature1.png";
import Feature2Img from "../src/assets/img/features/feature2.png";
import Feature3Img from "../src/assets/img/features/feature3.png";
import Feature4Img from "../src/assets/img/features/feature4.png";
import DataScienceImg from "../src/assets/svg/data science.svg";
import biImg from "../src/assets/svg/bi.svg";
import fintech from "../src/assets/img/tl.png";
import simImg from "../src/assets/img/sim.png";
import softwareArchImg from "../src/assets/img/software-arch.png";
import nidsImg from "../src/assets/img/nids.png";
import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";
import LogoV2 from "../src/assets/img/logo-v2.png";
import LogoEsprit from "../src/assets/img/logo.png";
import HeroImage from "../src/assets/img/hero-img.png";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";

import forumImg from "../src/assets/img/forum2021.png";
import opportunite from "../src/assets/img/Opportunite.png";
import der3Img from "../src/assets/img/der3.png";

export const navigationData = [
  {
    name: "Deliver",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Signup",
    href: "#",
  },
];

export const heroData = {
  title: `Former autrement une nouvelle génération`,
  subtitle: `Signature d'un partenariat entre Esprit et Inetum Tunisie`,
  btnText: "Lire plus...",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: `École Supérieure Privée D'ingénieurie et de Technologies`,
  subtitle: `ESPRIT propose un cycle ingénieur en informatique agréé par l'état et trois branches clés : les TIC, électromécanique et génie civil`,
};

export const featuresData = {
  title: "Devenir Ingénieur",
  subtitle:
    "Maitrise des techniques du génie logiciel (méthodes, langages et outils) et de l'interaction utilisateur pour la conception des logiciels embarqués et des systèmes d'information.",
  list: [
    {
      image: DataScienceImg,
      bgImage: Feature1BgImg,
      title: "Option DS (Data Science)",
      description:
        "L'objectif de l'option Data Science est d'acquérir un socle de connaissances conduisant à l'exercice opérationnel du métier de «datascientist».",
      linkText: "Lire plus",
      delay: "400",
    },
    {
      image: fintech,
      bgImage: Feature2BgImg,
      title: "Option Infini (Informatique Financière Et Ingénierie)",
      description:
        "Cette option va permettre aux étudiants d'appliquer les outils informatiques et mathématiques dans le domaine de la finance et l'assurance.",
      linkText: "Lire plus",
      delay: "700",
    },
    {
      image: biImg,
      bgImage: Feature3BgImg,
      title: "Option ERP-BI",
      description:
        "L'option ERP-BI (Enterprise Resource Planning-Business Intelligence) permet aux étudiants de découvrir une grande variété d'outils, d'applications et de méthodologies qui permettent aux organisations de collecter des données.",
      linkText: "Lire plus",
      delay: "1000",
    },
    {
      image: softwareArchImg,
      bgImage: Feature4BgImg,
      title: "Option Software Architecture Engineering",
      description:
        "L'option Software Architecture Engineering (Ex. GL) est les chemain de l'ingénieur polyvalent.",
      linkText: "Lire plus",
      delay: "1300",
    },
    {
      image: simImg,
      bgImage: Feature1BgImg,
      title: "Option SIM (Systèmes Informatiques Et Mobiles)",
      description:
        "Cette option permet de former des ingénieurs en informatique spécialisés dans le développement des applications mobile sur les systèmes d'exploitation Android et iOS",
      linkText: "Lire plus",
      delay: "1300",
    },
    {
      image: nidsImg,
      bgImage: Feature4BgImg,
      title: "Option NIDS",
      description:
        "Permet aux étudiants d'étudier les failles du système informatique, concevoir et déployer des solutions de sécurité en fonction des dernières technologies et des réglementations.",
      linkText: "Lire plus",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: forumImg,
    name: "Forum 2021",
    web: "",
    message:
      "Nous avons l'immense plaisir de vous inviter au Forum des Entreprises organisé par le Groupe ESPRIT",
    delay: "300",
  },
  {
    image: der3Img,
    name: "Esprit remporte le Bouclier d'argent au concours Healthy Campus",
    web: "",
    message: `Esprit remporte le "Bouclier d'argent" au concours "Healthy Campus", organisé par la "Fédération Arabe du Sport Universitaire".`,
    delay: "600",
  },
  {
    image: opportunite,
    name: "Opportunités de stage virtuels",
    web: "",
    message: `Notre Groupe Honoris offre des opportunités de stage virtuels à nos étudiants en classes terminales (5ème années).`,
    delay: "900",
  },
];

export const ctaData = {
  title: "Contactez-nous",
  subtitle: "",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: LogoEsprit,
  address: "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala.",
  email: "contact@esprit.tn",
  phone: "T (216) 70 250 000",
  list1: [],
  list2: [],
  socialList: [
    {
      icon: <FaLink />,
      href: "https://esprit.tn/",
    },
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/esprit.tn",
    },
  ],
};

export const copyrightData = {
  text: "© Yacine Kedhai, 2023. All rights reserved.",
  icon: <BsChatDotsFill />,
};

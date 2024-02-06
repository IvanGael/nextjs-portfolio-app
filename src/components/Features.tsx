import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import { AllColors } from "@/constants/allColors";

const contents = [
  {
    title: "MyShop",
    description:
      "Une petite application web ecommerce développé avec React, NodeJS et MongoDB",
    features: [
      "Création de compte et authentification",
      "Ajout de produits au panier et achats de produits",
    ],
    image: "/images/features/project_web2.png",
    order: false,
  },
  {
    title: "MyBlog",
    description:
      "Une petite application web de blog développé avec React et Firebase",
    features: [
      "Création de compte et authentification",
      "Faire des posts",
      "Réagir à des posts d'autres utilisateurs",
    ],
    image: "/images/features/project_web3.png",
    order: false,
  },
  {
    title: "Resfood",
    description:
      "Une application web de réservations de places pour restaurants avec géolocalisation des restaurants",
    features: [
      "Création de compte et authentification",
      "Réservation de place/Confirmation de la réservation",
      "Gélocalisation des restaurants sur une map",
    ],
    image: "/images/features/project_web4.png",
    order: false,
  },
  {
    title: "TPI",
    description:
      "Une plateforme de délivrance rapide de documents judiciaires pour les tribunaux de première instance développé avec Angular, Spring boot et Postgresql.",
    features: [
      "Création de compte et authentification",
      "Création de demande d'actes",
      "Gestion des demandes",
      "Délivrance des actes",
    ],
    image: "/images/features/project_web1.png",
    order: false,
  },
  {
    title: "Diag'Ec",
    description:
      "Une plateforme d'évaluation du niveau des entreprises par rapport à l'économie circulaire développé avec NextJs et Firebase.",
    features: [
      "Création de compte et authentification",
      "Questionnaire/Calcul automatique de score",
      "Réalisation de défis",
    ],
    image: "/images/features/project_web5.png",
    order: false,
  },
  {
    title: "Let's go biking",
    description:
      "Une application qui permet de minimiser les distances parcourues à pied en privilégiant l’usage du vélo développé avec Java swing et C# DotNet.",
    features: [
      "Recherche d'itinéraire en entrant le départ et la destination",
      "Obtention des itinéraires",
    ],
    image: "/images/features/project_web6.png",
    order: false,
  },
  {
    title: "Climatrack",
    description:
      "Une petite application mobile qui permet d'obtenir des informations météorologiques développé avec React Native.",
    features: [
      "Obtention des informations météorologiques d'une ville et les prévisions",
    ],
    image: "/images/features/project6.png",
    order: true,
  },
  {
    title: "ChatZen",
    description:
      "Une petite application mobile développé avec React Native- en utilisant la clé API de ChatGpt.",
    features: [
      "Obtention des informations météorologiques d'une ville et les prévisions",
    ],
    image: "/images/features/project7.png",
    order: true,
  },
  {
    title: "MyChat",
    description:
      "Une petite application mobile de chat développé avec Kotlin.",
    features: [
      "Création de compte et authentification",
      "Messagerie instantanée, discussions avec des amis",
    ],
    image: "/images/features/project1.png",
    order: true,
  },
  {
    title: "CurrencyConverter",
    description:
      "Une petite application mobile de conversion de monnaie développé avec Kotlin.",
    features: [
      "Conversion de monnaies dans plusieurs devises",
    ],
    image: "/images/features/project5.png",
    order: true,
  },
  {
    title: "WorldFeed",
    description:
      "Une petite application mobile qui permet d'obtenir des news de différents pays du monde développé avec Kotlin.",
    features: [
      "Obtention de news",
      "Ajouter les news aux favoris et partager les news sur les réseaux sociaux",
    ],
    image: "/images/features/project3.png",
    order: true,
  },
  {
    title: "OrderEase",
    description:
      "Une petite application mobile qui permet de gérer les commandes et les paiements des clients de votre business développé avec Flutter.",
    features: [
      "Création de compte et authentification",
      "Ajout de produits au panier et paiement",
    ],
    image: "/images/features/project2.png",
    order: true,
  },
  {
    title: "Diag'Ec",
    description:
      "Une application mobile d'évaluation du niveau des entreprises par rapport à l'économie circulaire développé avec Flutter.",
    features: [
      "Création de compte et authentification",
      "Questionnaire/Calcul automatique de score",
      "Réalisation de défis",
    ],
    image: "/images/features/project4.png",
    order: true,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="projets">
      <div id="content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Projets</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          web & mobile
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${content.order ? "order-1 md:order-2" : "order-1"
                }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className={`mt-2 w-3 h-3 ${AllColors.mainTextColor} shrink-0`} />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
                }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

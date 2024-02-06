import Experience from './Experiences/Experience';
import ProfessionalExperience from './Experiences/ProfessionalExperience';

const experiencesData: ProfessionalExperience[] = [
  {
    title: 'Développeur web et mobile full-stack',
    company: 'OHANA ENTERPRISE',
    location: 'Remote',
    startDate: 'Sept 2023',
    endDate: undefined,
    description:
      "Développement d'une application mobile et d'une plateforme web visant à évaluer le niveau des entreprises par rapport à l'économie circulaire. (Flutter, NextJS, Firebase)",
  },
  {
    title: 'Développeur web full-stack',
    company: 'HARVEST',
    location: 'Valbonne, France',
    startDate: 'May 2023',
    endDate: 'Aug 2023',
    description:
      "Projet VIC - Développement d'une solution visant à accompagner les banques dans le traitement des demandes de crédit de leurs clients. (Angulaire, Spring Boot, Microservices, Postgresql)",
  },
  {
    title: 'Développeur web full-stack',
    company: 'CEEL TECHNOLOGIES',
    location: 'Lomé, TOGO',
    startDate: 'May 2022',
    endDate: 'Aug 2022',
    description:
      "Développement d'une plateforme de délivrance rapide d'actes judiciaires pour les tribunaux de première instance. (Angulaire, Spring Boot, Postgresql)",
  },
  {
    title: 'Développeur web',
    company: 'IAI-TOGO',
    location: 'Lomé, TOGO',
    startDate: 'Jul 2021',
    endDate: 'Sept 2021',
    description:
      "Développement d'une plateforme de réservation de places pour les restaurants. (Réagir, Firebase)",
  },
];


const ProfExperiences = () => {
  return (
    <div id="experiences" className="mx-auto mb-6 max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

      <div id='content'>
        <div className='sm:flex justify-between items-center mb-12'>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white-900 my-4">Mes expériences</h2>
        </div>

        <Experience experiences={experiencesData} />

      </div>

    </div>
  )
}

export default ProfExperiences;

import Timeline from './Timeline/Timeline';
import AcademicBackground from './Timeline/AcademicBackground';

const academicData: AcademicBackground[] = [
  {
    title: "Génie Logiciel et Systèmes d'Information",
    degree: "Licence professionnelle",
    institution: "Institut Africain d'Informatique",
    year: "2019-2022",
  },
  {
    title: 'Sciences informatiques',
    degree: '4th year engineering cycle',
    institution: 'Polytech Nice Sophia',
    year: "2022-2023",
  },
  {
    title: 'Gestion de projets informatiques, développement de logiciels et technologies émergentes',
    degree: 'Master of science professionnel',
    institution: 'Epitech Technology Nice',
    year: "2023-Present",
  },
];



const Formation = () => {
  return (
    <div id="parcours" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

      <div id='content'>
        <div className='sm:flex justify-between items-center mb-12'>
          <h2 className="text-4xl font-bold text-center tracking-tight text-white my-4">Parcours académique</h2>
        </div>

        <div>
          <Timeline data={academicData} />
        </div>

      </div>

    </div>
  )
}

export default Formation;

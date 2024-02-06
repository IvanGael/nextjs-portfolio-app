// Experience.tsx
import React from 'react';
import ProfessionalExperience from './ProfessionalExperience';

interface ExperienceProps {
    experiences: ProfessionalExperience[];
}


const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <div className="experience-container">
            {experiences.map((experience, index) => (
                <div key={index} className="experience-item">
                    <h2 className="text-xl font-semibold">{experience.title}</h2>
                    <p className="text-white-600">{experience.company}</p>
                    <p className="text-white-600">{experience.location}</p>
                    <p className="text-white-500">
                        {experience.startDate} - {experience.endDate || 'Present'}
                    </p>
                    <p className="text-white-700">{experience.description}</p>
                    {index !== experiences.length - 1 && <hr className="experience-divider" />}
                </div>
            ))}
        </div>
    );
};

export default Experience;

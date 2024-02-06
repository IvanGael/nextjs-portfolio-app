// Timeline.tsx
import React from 'react';
import AcademicBackground from './AcademicBackground';

interface TimelineProps {
  data: AcademicBackground[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="timeline-container">
      {data.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h3 className="text-lg text-black font-semibold">{item.title}</h3>
            <p className="text-black">{item.degree}</p>
            <p className="text-black">{item.institution}</p>
            <p className="text-black">{item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

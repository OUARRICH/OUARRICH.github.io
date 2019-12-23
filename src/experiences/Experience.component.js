import React from 'react';

import './Experience.component.css';

import experiences from './data';

const renderExperienceHead = (experience) => <div className="Experience__head" key={`${experience.startDate}_${experience.endDate}`}>
    <div>
        <h3>{experience.role}</h3>
        {experience.client && <span className="Experience__head__at">chez </span>}
        {experience.client && <h5 className="Experience__head__client">{experience.client}</h5>}
    </div>
    <div>
        {`${experience.startDate} - ${experience.endDate}`}
    </div>
</div>;

const Experience = () => {
    return <div>
        {experiences.map(experience => renderExperienceHead(experience))}
    </div>;
};

export default Experience;
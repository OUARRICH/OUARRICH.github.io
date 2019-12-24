import React, {useState} from 'react';

import './Experience.component.css';

import experiences from './data';

const renderExperienceHead = (experience, onClickExperience) => (
    <div onClick={() => onClickExperience(experience)} className="Experience__head" key={`head_${experience.id}`}>
        <div>
            <h3>{experience.role}</h3>
            {experience.client && <span className="Experience__head__at">chez </span>}
            {experience.client && <h5 className="Experience__head__client">{experience.client}</h5>}
        </div>
        <div>
            {`${experience.startDate} - ${experience.endDate}`}
        </div>
</div>);

const renderExperienceDetail = (experience, selectedExperience) => (
    experience.id === selectedExperience && <div className="Experience__detail" key={`detail_${experience.id}`}>
            <p>{experience.shortDescription}</p>
            <ul className="Experience__detail__bullets">
                { experience.bulletPoints.map(bulletPoint => <li>{bulletPoint}</li>) } 
            </ul>
            <div>
                <strong>Technologies: </strong>{ experience.technologies.map(item => `${item}, `)}
            </div>
    </div>
);

const renderExperience = (experience, selectedExperience, onClickExperience) => {
    return (
        <div className="Experience" key={experience.id}>
            {renderExperienceHead(experience, onClickExperience)}
            {renderExperienceDetail(experience, selectedExperience)}
        </div>
    );
};

const Experiences = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const onClickExperience = (experience) => {
        setSelectedExperience(experience.id);
    };

    return experiences.map(experience => renderExperience(experience, selectedExperience, onClickExperience));
}

export default Experiences;
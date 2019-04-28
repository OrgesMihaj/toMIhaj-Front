import React, { useState } from 'react';

// image
import  calendar from '../../assets/images/calendar.svg';
import  bulgaria from '../../assets/images/bulgaria.svg';
import   albania from '../../assets/images/albania.svg';

const WorkExperience = () => {
    const [experiences] = useState([
        {
            'id': 1,
            'position': 'Front-end Developer',
            'company': 'Freelance',
            'companyWeb': 'http://goo.gl/xuL2v2',
            'period': '2015 – Present',
            'location': 'Blagoevgrad, Bulgaria',
            'flag': bulgaria,
            'description': "Managed all stages of web development for clientele, from initial design and architecture to development,   deployment, and management. Converts PSDs into responsive pages using Twitter Bootstrap or Bulma. Designed RESTful style web services to manipulate dynamic datasets using VueJS or Angular."
        },
        {
            'id': 2,
            'position': 'Instructor',
            'company': 'ALMOOC',
            'companyWeb': 'http://goo.gl/xuL2v2',
            'period': 'Sep 2016 – Oct 2016',
            'location': 'Tirana, Albania',
            'flag': albania,
            'description': "Designed online course in validating and processing forms with JavaScript and PHP. Worked with Camtasia Studio and Adobe Audition to record and edit video materials. Assisted more than 200 students that have enrolled the course."
        },
        {
            'id': 3,
            'position': 'Intern, Web Developer ',
            'company': 'Real Visualz Inc.',
            'companyWeb': 'http://youtu.be/Ndni_Tvafbk',
            'period': 'Dec 2015 –  Mar 2016',
            'location': 'Tirana, Albania',
            'flag': albania,
            'description': "Developed a cross-word type web game with 2 difficulty levels where points were awarded in a time-constraint environment. Hints and clues provided for each word. Built responsive, mobile-first layout using Bootstrap. Used Scrum methodology for Agile software development."
        }
    ]);

    return (
        <div class="o-row">

            <div class="o-column">
                <h2 class="o-column__title">
                    Work <br /> experience
                </h2>
            </div>

            <div class="o-column">

                {experiences.map(experience => (

                    <div class="o-column__row" key={experience.id}>
                        <h2 class="o-column__subtitle">
                            {experience.position}

                            <a href={experience.companyWeb} class="o-badge">{experience.company}</a>
                        </h2>

                        <small class="o-column__description o-column__description--small">
                            <img class="o-icon" src={calendar} alt="Calendar" />
                            {experience.period}

                            <img style={{marginLeft: 25 + 'px'}}
                                 class="o-icon"
                                 src={experience.flag} alt={experience.location} />

                            {experience.location}
                        </small>

                        <br /><br />

                        <p class="o-column__description">
                            {experience.description}
                        </p>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default WorkExperience;

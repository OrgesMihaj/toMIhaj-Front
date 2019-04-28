import React, { useState } from 'react';

// image
import  calendar from '../../assets/images/calendar.svg';
import  bulgaria from '../../assets/images/bulgaria.svg';
import   albania from '../../assets/images/albania.svg';

const Education = () => {
    const [educations] = useState([
        {
            'id': 1,
            'study': 'Computer Science',
            'institution': 'American University in Bulgaria',
            'institutionWeb': 'https://www.aubg.edu/',
            'period': '2017 – Present',
            'location': 'Blagoevgrad, Bulgaria',
            'flag': bulgaria
        },
        {
            'id': 2,
            'study': 'Electronics',
            'institution': 'Harry T. Fultz Institute',
            'institutionWeb': 'https://www.aubg.edu/',
            'period': '2013 – 2017',
            'location': 'Tirana, Albania',
            'flag': albania
        }
    ]);

    return (
        <div class="o-row">

            <div class="o-column">
                <h2 class="o-column__title">
                    Education
                </h2>
            </div>

            <div class="o-column">

                {educations.map(education => (

                    <div class="o-column__row" key={education.id}>

                        <h2 class="o-column__subtitle">
                            {education.study}

                            <a href="https://www.aubg.edu/" class="o-badge">
                                {education.institution}
                            </a>
                        </h2>

                        <small class="o-column__description o-column__description--small">
                            <img class="o-icon" src={calendar} alt="Calendar" />
                            {education.period}

                            <img style={{marginLeft: 25 + 'px'}}
								 class="o-icon"
								 src={education.flag} alt={education.location} />
                            {education.location}
                        </small>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Education;

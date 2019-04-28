import React, { useState } from 'react';

// image
import calendar from '../../assets/images/calendar.svg';

const Award = () => {
    const [awards] = useState([
        {
            'id': 1,
            'competition': 'ICT Awards competition: FINALIST',
            'description': 'Created a CNC machine that could draw different images on a piece of paper.',
            'date': 'Mar 2016',
        }
    ]);

    return (
        <div class="o-row">

            <div class="o-column">
                <h2 class="o-column__title">
                    Award
                </h2>
            </div>

            <div class="o-column">

                {awards.map(award => (

                    <div class="o-column__row">
						<h2 class="o-column__subtitle">
							{award.competition}
						</h2>

						<small class="o-column__description o-column__description--small">
							<img class="o-icon" src={calendar} alt="Calendar" />

							{award.date}
						</small>

						<br /><br />

						<p class="o-column__description o-column__description--medium">
							{award.description}
						</p>
					</div>

                ))}

            </div>
        </div>
    )
}

export default Award;

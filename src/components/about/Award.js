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
        <div className="o-row">

            <div className="o-column">
                <h2 className="o-column__title">
                    Award
                </h2>
            </div>

            <div className="o-column">

                {awards.map(award => (

                    <div className="o-column__row" key={award.id}>
						<h2 className="o-column__subtitle">
							{award.competition}
						</h2>

						<small className="o-column__description o-column__description--small">
							<img className="o-icon" src={calendar} alt="Calendar" />

							{award.date}
						</small>

						<br /><br />

						<p className="o-column__description o-column__description--medium">
							{award.description}
						</p>
					</div>

                ))}

            </div>
        </div>
    )
}

export default Award;
